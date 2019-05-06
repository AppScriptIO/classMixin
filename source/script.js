export function decorator({
  /** mixin complies with `Mixin` function of the 'mixwith' module.
   * e.g. Mixin({ Superclass: class{} } => class Y extends Superclass {})
   */
  mixin = null,
}) {
  return Class => {
    // add controller methods for the specific module that uses them.
    if (mixin) {
      Class = mixin({ Superclass: Class }) /* return Specific implementation Controller */
    } // else return Reusable nested unit
    return Class
  }
}

export * from 'mixwith'
