import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "cenfo-pagination",
  templateUrl: "./pagination.component.html",
  styleUrls: ["./pagination.component.scss"]
})
export class PaginationComponent {
  @Input()
  public page: number;
  @Input()
  public pageSize: number;
  @Input()
  public totalElements: number;

  @Output()
  public readonly pageChanged: EventEmitter<number> = new EventEmitter<
    number
  >();
  @Output()
  public readonly recordsPerPageChanged: EventEmitter<
    number
  > = new EventEmitter<number>();

  public emitPageChange(): void {
    console.log(this.page);

    this.pageChanged.emit(this.page);
  }

  public emitRecordsPerPageChange(range: number): void {
    console.log(range);

    this.recordsPerPageChanged.emit(range);
  }
}
