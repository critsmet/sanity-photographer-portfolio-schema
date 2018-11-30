"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

/**
 * Check if an `index` of a `text` node is in a `range`.
 *
 * @param {Number} index
 * @param {Text} text
 * @param {Selection} range
 * @return {Boolean}
 */

function isInRange(index, text, range) {
  var startKey = range.startKey,
      startOffset = range.startOffset,
      endKey = range.endKey,
      endOffset = range.endOffset;


  if (text.key == startKey && text.key == endKey) {
    return startOffset <= index && index < endOffset;
  } else if (text.key == startKey) {
    return startOffset <= index;
  } else if (text.key == endKey) {
    return index < endOffset;
  } else {
    return true;
  }
}

/**
 * Export.
 *
 * @type {Function}
 */

exports.default = isInRange;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlscy9pcy1pbi1yYW5nZS5qcyJdLCJuYW1lcyI6WyJpc0luUmFuZ2UiLCJpbmRleCIsInRleHQiLCJyYW5nZSIsInN0YXJ0S2V5Iiwic3RhcnRPZmZzZXQiLCJlbmRLZXkiLCJlbmRPZmZzZXQiLCJrZXkiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBOzs7Ozs7Ozs7QUFTQSxTQUFTQSxTQUFULENBQW1CQyxLQUFuQixFQUEwQkMsSUFBMUIsRUFBZ0NDLEtBQWhDLEVBQXVDO0FBQUEsTUFDN0JDLFFBRDZCLEdBQ2dCRCxLQURoQixDQUM3QkMsUUFENkI7QUFBQSxNQUNuQkMsV0FEbUIsR0FDZ0JGLEtBRGhCLENBQ25CRSxXQURtQjtBQUFBLE1BQ05DLE1BRE0sR0FDZ0JILEtBRGhCLENBQ05HLE1BRE07QUFBQSxNQUNFQyxTQURGLEdBQ2dCSixLQURoQixDQUNFSSxTQURGOzs7QUFHckMsTUFBSUwsS0FBS00sR0FBTCxJQUFZSixRQUFaLElBQXdCRixLQUFLTSxHQUFMLElBQVlGLE1BQXhDLEVBQWdEO0FBQzlDLFdBQU9ELGVBQWVKLEtBQWYsSUFBd0JBLFFBQVFNLFNBQXZDO0FBQ0QsR0FGRCxNQUVPLElBQUlMLEtBQUtNLEdBQUwsSUFBWUosUUFBaEIsRUFBMEI7QUFDL0IsV0FBT0MsZUFBZUosS0FBdEI7QUFDRCxHQUZNLE1BRUEsSUFBSUMsS0FBS00sR0FBTCxJQUFZRixNQUFoQixFQUF3QjtBQUM3QixXQUFPTCxRQUFRTSxTQUFmO0FBQ0QsR0FGTSxNQUVBO0FBQ0wsV0FBTyxJQUFQO0FBQ0Q7QUFDRjs7QUFFRDs7Ozs7O2tCQU1lUCxTIiwiZmlsZSI6ImlzLWluLXJhbmdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4vKipcbiAqIENoZWNrIGlmIGFuIGBpbmRleGAgb2YgYSBgdGV4dGAgbm9kZSBpcyBpbiBhIGByYW5nZWAuXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IGluZGV4XG4gKiBAcGFyYW0ge1RleHR9IHRleHRcbiAqIEBwYXJhbSB7U2VsZWN0aW9ufSByYW5nZVxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuXG5mdW5jdGlvbiBpc0luUmFuZ2UoaW5kZXgsIHRleHQsIHJhbmdlKSB7XG4gIGNvbnN0IHsgc3RhcnRLZXksIHN0YXJ0T2Zmc2V0LCBlbmRLZXksIGVuZE9mZnNldCB9ID0gcmFuZ2VcblxuICBpZiAodGV4dC5rZXkgPT0gc3RhcnRLZXkgJiYgdGV4dC5rZXkgPT0gZW5kS2V5KSB7XG4gICAgcmV0dXJuIHN0YXJ0T2Zmc2V0IDw9IGluZGV4ICYmIGluZGV4IDwgZW5kT2Zmc2V0XG4gIH0gZWxzZSBpZiAodGV4dC5rZXkgPT0gc3RhcnRLZXkpIHtcbiAgICByZXR1cm4gc3RhcnRPZmZzZXQgPD0gaW5kZXhcbiAgfSBlbHNlIGlmICh0ZXh0LmtleSA9PSBlbmRLZXkpIHtcbiAgICByZXR1cm4gaW5kZXggPCBlbmRPZmZzZXRcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG59XG5cbi8qKlxuICogRXhwb3J0LlxuICpcbiAqIEB0eXBlIHtGdW5jdGlvbn1cbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBpc0luUmFuZ2VcbiJdfQ==