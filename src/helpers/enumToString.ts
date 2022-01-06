
// Funcion que Convierte un enum a un string
export const EnumToString = (_enum: object) =>
  Object.keys(_enum)
    .map(key => _enum[key])
    .filter(value => typeof value === 'string') as string[];