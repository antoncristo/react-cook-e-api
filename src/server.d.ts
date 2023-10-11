declare type AbstractObject = Record<string, unknown>;

declare type ValueOf<T> = T[keyof T];

declare type UUID = `${string}-${string}-${string}-${string}`;

declare type Email = string;

declare type Password = string;

declare interface Credentials {
	email: Email;
	password: Password;
}
