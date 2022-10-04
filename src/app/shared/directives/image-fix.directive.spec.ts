import { ImgFallbackDirective } from './image-fix.directive';

describe('ImgFallbackDirective', () => {
  it('should create an instance', () => {
    const directive:ImgFallbackDirective = new ImgFallbackDirective();
    expect(directive).toBeTruthy();
  });
});

import { PostStylingDirective } from './post-styling.directive';
import { ElementRef } from '@angular/core';

describe('PostStylingDirective', () => {
  it('should create an instance', () => {
    const directive = new PostStylingDirective();
    expect(directive).toBeTruthy();
  });
});

