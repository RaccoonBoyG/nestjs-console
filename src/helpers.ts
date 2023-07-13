/**
 * @module Helpers
 */
import ora from 'ora';
import * as oratype from 'ora';
/**
 * Create an ora spinner
 * @see https://www.npmjs.com/package/ora
 */
export const createSpinner = (opts?: oratype.Options): oratype.Ora => ora(opts);
