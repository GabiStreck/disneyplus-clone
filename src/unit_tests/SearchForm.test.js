import { cleanup, render, fireEvent } from "@testing-library/svelte";
import { afterEach, describe, it } from "vitest";
import SearchForm from '../lib/components/SearchForm.svelte';

const setup = () => {
    const utils = render(SearchForm)
    const input = utils.getByLabelText('search-input')
    return {
        input,
        ...utils,
    }
}

describe("Unit test for SearchForm", () => {
    afterEach(cleanup)

    it('It should keep a $ in front of the input', () => {
        const { input } = setup()
        fireEvent.change(input, { target: { value: '23' } })
        expect(input.value).toBe('23')
    })

    it('It should allow a $ to be in the input when the value is changed', () => {
        const { input } = setup()
        fireEvent.change(input, { target: { value: '$23.0' } })
        expect(input.value).toBe('$23.0')
    })
})