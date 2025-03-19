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