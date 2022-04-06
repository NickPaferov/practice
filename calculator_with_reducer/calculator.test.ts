import {calculatorReducer, div, mult, sub, sum} from "./calculator"

test("sum", () => {
    //1. Тестовые данные
    const state = 10
    const num = 5
    //2. Выполняем тестируемый код
    const result = sum(state, num)
    //3. Проверка результата
    expect(result).toBe(15)
})

test("sub", () => {
    expect(sub(10, 5)).toBe(5)
})

test("div", () => {
    expect(div(10, 5)).toBe(2)
})

test("mult", () => {
    expect(mult(10, 5)).toBe(50)
})

test("sum of two numbers with calculatorReducer", () => {
    expect(calculatorReducer(3, {type: "SUM", num: 5})).toBe(8)
})

test("subtraction one number from another with calculatorReducer", () => {
    expect(calculatorReducer(10, {type: "SUB", num: 3})).toBe(7)
})
test("division one number by another with calculatorReducer", () => {
    expect(calculatorReducer(10, {type: "DIV", num: 5})).toBe(2)
})
test("multiplication one number to another with calculatorReducer", () => {
    expect(calculatorReducer(10, {type: "MULT", num: 3})).toBe(30)
})