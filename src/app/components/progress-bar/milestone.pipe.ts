import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'milestone'
})
export class MilestonePipe implements PipeTransform {

  private milestones = [
    500000,
    1000000,
    2000000,
    5000000,
    7500000,
    10000000
  ];

  transform(value: number, args?: any): string {
    if (!value) {
      return '0';
    }

    const text = this.getMilestoneText(value);

    switch (true) {
      case value > 1000000000:
        return `${text}${(value / 1000000000).toFixed(0)}B`;
      case value > 1000000:
        return `${text}${(value / 1000000).toFixed(0)}MM`;
      case value > 1000:
        return `${text}${(value / 1000).toFixed(0)}K`;
      default:
        return value.toFixed(0);
    }
  }

  private getMilestoneText = (value: number) => {
    for (let i = 0; i < this.milestones.length; i++) {
      if (value <= this.milestones[i]) {
        return `Milestone ${(i + 1).toString()}: `;
      }
    }
    return `Milestone: ${(this.milestones.length).toString()}: `;
  }
}
