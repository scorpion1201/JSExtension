/**
 * Get Object type name
 * @author David Park
 * @memberof Object.prototype
 * @returns {String}
 */
Object.prototype.getType = function() {
  const toString = Object.prototype.toString
  return toString.call(this).replace(/\[object\s(.+?)\]/gi, "$1").toLowerCase()
}

/**
 * Check a mutable object.
 * @author David Park
 * @memberof Object.prototype
 * @returns {Boolean} Return bool check a mutable object.
 */
Object.prototype.isMutable = function() {
  return this.getType() === "object" || this.getType() === "array"
}

/**
 * Copy only immutable items of a mutable object.
 * @author David Park
 * @memberof Object.prototype
 * @returns {(Object|Array)} Return a shallow copy of a mutable object.
 */
Object.prototype.copy = function() {
  let result = {}, self = this,
      i = 0

  if (!self.isMutable()) {
    return self
  }

  if (self.length) {
    result = []
  }

  let keys = Object.keys(self)
  while (i < keys.length) {
    result[keys[i]] = self[keys[i++]]
  }
  return result
}

/**
 * Copy all items of a mutable object.
 * @author David Park
 * @memberof Object.prototype
 * @returns {(Object|Array)} Return a deep copy of a mutable object.
 */
Object.prototype.deepcopy = function() {
  let result = {}, self = this,
      i = 0

  if (!self.isMutable()) {
    return self
  }

  if (self.length) {
    result = []
  }

  let keys = Object.keys(self)
  while (i < keys.length) {
    let key = keys[i++]
    let orig = self[key]
    if (typeof orig === "object") {
      result[key] = orig.deepcopy()
    } else {
      result[key] = orig
    }
  }
  return result
}
