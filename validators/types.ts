export interface Validator {
    test: (content: any) => boolean
    name: string
}