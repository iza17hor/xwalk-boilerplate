export interface Config {
  mainTsPath: string;
  mainScssPath: string;
  iconsDirPath: string;
  iconsTypesPath: string;
  fontsScssPath?: string;
  fontsCssPath?: string;
  lazyStylesScssPath?: string;
  lazyStylesCssPath?: string;
  sidekickLibraryStylesScssPath?: string;
  sidekickLibraryStylesCssPath?: string;
  editorTsPath: string;
  lcpBlocks?: string[];
}

export const config: Config = {
  mainTsPath: './src/main.ts',
  mainScssPath: './src/styles/sass/main.scss',
  iconsDirPath: './public/icons',
  iconsTypesPath: './src/types/icons.types.ts',
  fontsScssPath: './src/styles/sass/fonts.scss',
  fontsCssPath: './dist/fonts/fonts.css',
  lazyStylesScssPath: './src/styles/sass/lazy-styles.scss',
  lazyStylesCssPath: './dist/lazyStyles/lazyStyles.css',
  editorTsPath: './src/app/editor/editor-support.ts',
  lcpBlocks: [],
};
