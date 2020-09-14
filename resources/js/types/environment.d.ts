declare global {
	const environment: IEnvironment
	interface IEnvironment {
    stripeKey: string
	}
}
export {} // Typescript needs this file to be a module
