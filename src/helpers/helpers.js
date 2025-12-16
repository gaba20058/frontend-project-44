export const isEven = (num) => {
  if (num % 2 === 0) {
    return true
  }
  return false
}

export const generateNumber = () => {
  return Math.floor(Math.random() * 100)
}

export const calcNums = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2
    case '-':
      return num1 - num2
    case '*':
      return num1 * num2
    case '/':
      return num1 / num2
  }
}

export const mathOperator = () => {
  const num = Math.floor(Math.random() * 3)

  switch (num) {
    case 0:
      return '+'
    case 1:
      return '-'
    case 2:
      return '*'
    default:
      return '/'
  }
}

export const findGCD = (a, b) => {
  let num1 = Math.abs(a)
  let num2 = Math.abs(b)

  while (num2) {
    const temp = num2
    num2 = num1 % num2
    num1 = temp
  }
  return num1
}

export const generateProgression = (start, step, length) => {
  const progression = []
  for (let i = 0; i < length; i++) {
    progression.push(start + i * step)
  }
  return progression
}

export const hideElement = (progression, hiddenIndex) => {
  const progressionCopy = [...progression]
  progressionCopy[hiddenIndex] = '..'
  return progressionCopy.join(' ')
}

export const generateProgressionParams = () => {
  const start = Math.floor(Math.random() * 50) + 1
  const step = Math.floor(Math.random() * 10) + 1
  const length = Math.floor(Math.random() * 6) + 5
  const hiddenIndex = Math.floor(Math.random() * length)

  return { start, step, length, hiddenIndex }
}

export const isPrime = (num) => {
  if (num < 2) {
    return false
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false
    }
  }
  return true
}

export const isPrimeOptimized = (num) => {
  if (num <= 1) return false
  if (num <= 3) return true
  if (num % 2 === 0 || num % 3 === 0) return false
  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) {
      return false
    }
  }
  return true
}
