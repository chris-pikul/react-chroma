import { StringMap } from './types';
/**
 * Shades of black (Smokey Black)
 *
 * As with each color set, the color is
 * postfixed with a p# or m#. With "p"
 * being plus, and "m" being minus.
 * So p1, p2, m1, and m2.
 * Additionally color variations for white
 * text on top is provided as
 * {COLOR}_WHITE_FG
 * and gray/color variation on top of this
 * color as
 * {COLOR}_GRAY_TEXT, {COLOR}_VAR_TEXT
 */
export declare var BlackColors: StringMap;
/**
 * Shades of gray (Slate)
 *
 * As with each color set, the color is
 * postfixed with a p# or m#. With "p"
 * being plus, and "m" being minus.
 * So p1, p2, m1, and m2.
 * Additionally color variations for white
 * text on top is provided as
 * {COLOR}_WHITE_FG
 * and gray/color variation on top of this
 * color as
 * {COLOR}_GRAY_TEXT, {COLOR}_VAR_TEXT
 */
export declare var GrayColors: StringMap;
/**
 * Shades of white (Ghost)
 *
 * As with each color set, the color is
 * postfixed with a p# or m#. With "p"
 * being plus, and "m" being minus.
 * So p1, p2, m1, and m2.
 * Additionally color variations for black
 * text on top is provided as
 * {COLOR}_BLACK_FG
 * and gray/color variation on top of this
 * color as
 * {COLOR}_GRAY_TEXT, {COLOR}_VAR_TEXT
 */
export declare var WhiteColors: StringMap;
/**
 * Shades of red (Amaranth)
 *
 * As with each color set, the color is
 * postfixed with a p# or m#. With "p"
 * being plus, and "m" being minus.
 * So p1, p2, m1, and m2.
 * Additionally color variations for white
 * text on top is provided as
 * {COLOR}_WHITE_FG
 * and gray/color variation on top of this
 * color as
 * {COLOR}_GRAY_TEXT, {COLOR}_VAR_TEXT
 */
export declare var RedColors: StringMap;
/**
 * Shades of red (Sun Glow)
 *
 * As with each color set, the color is
 * postfixed with a p# or m#. With "p"
 * being plus, and "m" being minus.
 * So p1, p2, m1, and m2.
 * Additionally color variations for white
 * text on top is provided as
 * {COLOR}_WHITE_FG
 * and gray/color variation on top of this
 * color as
 * {COLOR}_GRAY_TEXT, {COLOR}_VAR_TEXT
 */
export declare var YellowColors: StringMap;
/**
 * Shades of green (UFO)
 *
 * As with each color set, the color is
 * postfixed with a p# or m#. With "p"
 * being plus, and "m" being minus.
 * So p1, p2, m1, and m2.
 * Additionally color variations for white
 * text on top is provided as
 * {COLOR}_WHITE_FG
 * and gray/color variation on top of this
 * color as
 * {COLOR}_GRAY_TEXT, {COLOR}_VAR_TEXT
 */
export declare var GreenColors: StringMap;
/**
 * Shades of blue (Cerulean)
 *
 * As with each color set, the color is
 * postfixed with a p# or m#. With "p"
 * being plus, and "m" being minus.
 * So p1, p2, m1, and m2.
 * Additionally color variations for white
 * text on top is provided as
 * {COLOR}_WHITE_FG
 * and gray/color variation on top of this
 * color as
 * {COLOR}_GRAY_TEXT, {COLOR}_VAR_TEXT
 */
export declare var BlueColors: StringMap;
/**
 * Shades of purple (Fuchsia)
 *
 * As with each color set, the color is
 * postfixed with a p# or m#. With "p"
 * being plus, and "m" being minus.
 * So p1, p2, m1, and m2.
 * Additionally color variations for white
 * text on top is provided as
 * {COLOR}_WHITE_FG
 * and gray/color variation on top of this
 * color as
 * {COLOR}_GRAY_TEXT, {COLOR}_VAR_TEXT
 */
export declare var PurpleColors: StringMap;
/**
 * Common colors for general intents
 * Adhere to WCAG 2.0 standards for accessibility
 */
export declare var BasicColors: StringMap;
/**
 * User provided custom colors
 */
export declare var CustomColors: StringMap;
/**
 * Combined assortment of colors
 */
declare var Colors: StringMap;
/**
 * Adds a custom color to the registries.
 * Will be included in Custom and default Colors objects.
 * @param key Color key
 * @param value Color value (hex/rgb/hsl)
 */
export declare function AddColor(key: string, value: string): void;
/**
 * Removes a custom color from the registries.
 * Removes from the default Colors registry as well as the Custom table.
 * @param key Color key
 */
export declare function RemoveColor(key: string): void;
/**
 * Searches for the key belonging to a color value.
 * Will not negotiate color types from rgb(a) or hsl(s) colors.
 * Search order is Custom, Basics, Extended, then Grays
 * @param color Color value
 */
export declare function FindColorKey(color: string): string | null;
export default Colors;
