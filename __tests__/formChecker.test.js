import { formChecker } from "../src/client/js/formChecker";

describe(formChecker, () => {
    test("return an error if departure date is not present", () => {
        let formData = {
            departureDate: '',
            returnDate: '7/14/2020',
            city: 'New York',
            country: 'US'
        }
        expect(formChecker(formData)).toStrictEqual(['']);
    });
    test("return an error if return date is not present", () => {
        let formData = {
            departureDate: '7/7/2020',
            returnDate: '',
            city: 'New York',
            country: 'US'
        }
        expect(formChecker(formData)).toStrictEqual(['']);
    });
    test("return an error if city is not present", () => {
        let formData = {
            departureDate: '7/7/2020',
            returnDate: '7/14/2020',
            city: '',
            country: 'US'
        }
        expect(formChecker(formData)).toStrictEqual(['']);
    });
        test("return an error if country is not present", () => {
            let formData = {
                departureDate: '7/7/2020',
                returnDate: '7/14/2020',
                city: 'New York',
                country: ''
            }
            expect(formChecker(formData)).toStrictEqual(['']);
    });
    test("multiple errors if multiple fields are missing", () => {
        let formData = {
            departureDate: '7/7/2020',
            returnDate: '',
            city: 'New York',
            country: ''
        }
        expect(formChecker(formData)).toStrictEqual(['', '']);
        expect(formChecker(formData).length).toBe(2);
    });
});