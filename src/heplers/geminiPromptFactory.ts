export class GeminiPromptFactory{
    static CreatePrompt(text:string) : string {
        return `${text}.Please send your response in JSON format:{message: string emotion: “smile” | “happy” | “sad” | ‘angry’ | “friendly”}. The emotion should match my message. The “friendly” emotion is used only at the beginning, during the greeting. If you want to help, ask first; don’t help right away.`
    }
}