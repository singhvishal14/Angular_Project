import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appPaginationDirective]'
})
export class PaginationDirectiveDirective {
  @Input() appPaginationOf!: any[] ; // Input array to paginate
  @Input() appPaginationPageSize!: number ; // Number of items per page

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) { }

  ngOnChanges() {
    this.updateView();
  }

  private updateView() {
    this.viewContainer.clear();

    if (this.appPaginationOf && this.appPaginationOf.length > 0) {
      const startIndex = (this.appPaginationOf.length - 1) * this.appPaginationPageSize;
      const endIndex = startIndex + this.appPaginationPageSize;

      const pageItems = this.appPaginationOf.slice(startIndex, endIndex);

      pageItems.forEach((item: any) => {
        this.viewContainer.createEmbeddedView(this.templateRef, { $implicit: item });
      });
    }
  }

}
