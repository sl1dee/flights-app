declare module "*.module.scss" {
  const classes: { [key: string]: string };
  export default classes;
}
declare module "validator";

declare module '@components/*';
declare module '@features/*';
declare module '@pages/*';
declare module '@utils/*';
declare module '@data/*';
