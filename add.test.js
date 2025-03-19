import { describe, it, expect } from 'vitest';
import {Add} from "./index.js"

describe('String Calculator - Step 1',() => {
    it('should return 0 for an empty string', () => {
        expect(Add("")).toBe(0);
    });

    it('should return the same number when only one number is passed', () => {
        expect(Add("1")).toBe(1);
    });

    it('should return the sum of two numbers separated by a comma', () => {
        expect(Add("7,9")).toBe(16);
    });
})

describe('String Calculator - Step 2', () => {
    it('should return the sum of multiple numbers', () => {
        expect(Add("1,2,3,4")).toBe(10);
    });
});

describe('String Calculator - Step 3', () => {
    it('should handle new lines between numbers', () => {
        expect(Add("1\n2,3")).toBe(6);
    });
});

describe("String Calculator - Step 4", () => {
    it("should support a single custom delimiter", () => {
        expect(Add("//;\n2;7")).toBe(9);
    });
});