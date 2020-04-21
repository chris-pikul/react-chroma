import { CSSProperties } from 'react';

export type StyleFunction = () => (CSSProperties | CSSProperties[] | string);
export type StyleResolver = (CSSProperties | CSSProperties[] | StyleFunction | string);

/**
 * Compiles the given inputs into a single CSSProperties object for
 * use within the 'style' property of react components.
 * @param styles Input of style types to compile
 */
export function compileStyles(styles:StyleResolver):CSSProperties {
    let preComp:CSSProperties[] = [];
    if(typeof styles === 'function') {
        const res = styles();
        if(Array.isArray(res)) {
            preComp = preComp.concat(...res);
        } else if(typeof res === 'string') {
            preComp.push( styleFromString(res) );
        } else {
            preComp.push( res );
        }
    } else if(Array.isArray(styles)) {
        preComp = preComp.concat(...styles.map(s => compileStyles(s)));
    } else if(typeof styles === 'string') {
        preComp.push( styleFromString(styles) );
    } else {
        preComp.push(styles);
    }

    return Object.assign({}, ...preComp) as CSSProperties;
}

/**
 * Parses a string of CSS into a CSSProperties object.
 * @param styleStr Valid CSS string
 */
export function styleFromString(styleStr:string):CSSProperties {
    //Break the lines up by the semi-colon and trim them down for tabs/spaces.
    const lines = styleStr.split(';')
    .map(l => l.trim())
    .filter(l => l.length > 1);

    //Prepare the results object for returning as CSSProperties
    const results:{[key:string]: any} = {};

    //Parse through each line by splitting by the property separator (:)
    //and then camel-casing the property from the value.
    lines.map(l => l.split(':'))
    .forEach(line => {
        const prop = line[0].trim(), value = line[1].trim();
        const cmlProp = prop.split('-')
            .map((p, j) => {
                if(j > 0)
                    return p.charAt(0).toUpperCase() + p.substring(1);
                return p;
            })
            .join('');
        results[cmlProp] = value;
    });

    return results as CSSProperties;
}

/**
 * Converts a "Tagged Template Literal" into an object of React CSSProperties.
 * The incoming string can be of standard CSS type, the properties will be converted
 * to the appropriate camel-case react style versions.
 * Any arguments passed along will be resolved to strings.
 * NOTE: The properties are not validated to be correct, they are automatically
 * processed by camel-casing them.
 * @param strings Array of strings from the template literal
 * @param args Array of arguments from the template literal
 */
export function style(strings:(TemplateStringsArray|string[]), ...args:any[]):CSSProperties {
    //First compile the Template Literal into a solid string,
    //resolving/negotiating any arguments along the way
    let compiled:string = '';
    for(let i = 0; i < strings.length; i++) {
        compiled += strings[i];
        if(i < (strings.length-1)) {
            const arg = args[i];
            //Check the argument type to see how to deal with it.
            if(typeof arg === 'function') {
                compiled += arg().toString();
            } else if(Array.isArray(arg)) {
                compiled += arg.map(v => v.toString()).join(' ');
            } else {
                compiled += arg.toString();
            }
        }
    }

    return styleFromString(compiled);
}