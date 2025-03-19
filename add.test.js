import { describe, it, expect } from 'vitest';
import {Add} from "./index.js"

describe('String Calculator - Step 1',() => {
    it('should return 0 for an empty string', () => {
        expect(Add("")).toBe(0);
    });
})