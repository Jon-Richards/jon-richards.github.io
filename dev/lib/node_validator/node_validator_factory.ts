/**
 * @fileoverview
 * Contains functions that generate arrays of NodeValidators.
 */

import { NodeValidator } from './node_validator';

/**
 * Generates an array of NodeValidators by calling a provided factory function a
 * given number of times.  Additional NodeValidators can be appended to the
 * array.
 * @param factory The factory method used for generating individual instances
 * of the NodeValidator.
 * @param length The number of NodeValidators to generate excluding an
 * additional validators that are supplied.
 * @param include Appends additional NodeValidators to the end of the array.
 */
// export function buildValidators<
//   Node extends object, 
//   Validator extends NodeValidator<Node>
// > (
//   factory: (o: object) => Validator,
//   length = 3,
//   include?: Validator | Validator[]
// ): Validator[] {
//   let generated: Validator[] = [];
//   let additional: Validator[] = [];
  
//   if (include) {
//     additional = Array.isArray(include) ? include : [include];
//   }
//   Array.from({length}).forEach( () => 
//     generated.push( factory() )
//   );
//   generated = [...generated, ...additional];
  
//   return generated;
// }