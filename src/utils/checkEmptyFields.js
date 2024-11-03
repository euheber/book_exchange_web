export function checkIfFieldIsEmpty(obj) {
    return !obj.name || !obj.isbn || !obj.publisher;
  }
  