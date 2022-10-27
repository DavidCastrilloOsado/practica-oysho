import { TestBed } from "@angular/core/testing";

type CompilerOptions = Partial<{
    providers: any[];
    useJit: boolean;
    preserveWhitespaces: boolean;
  }>;
  export type ConfigureFn = (testBed: typeof TestBed) => void;
  
  export const configureTests = (configure: ConfigureFn, compilerOptions: CompilerOptions = {}) => {
    const compilerConfig: CompilerOptions = {
      preserveWhitespaces: false,
      ...compilerOptions,
    };
  
    const configuredTestBed:any = TestBed.configureCompiler(compilerConfig);
  
    configure(configuredTestBed);
  
    return configuredTestBed.compileComponents().then(() => configuredTestBed);
  };
  