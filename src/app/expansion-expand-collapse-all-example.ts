import { Component, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
export interface PeriodicElement1 {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA1: PeriodicElement1[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
];

/**
 * @title Accordion with expand/collapse all toggles
 */
@Component({
  selector: 'expansion-expand-collapse-all-example',
  templateUrl: 'expansion-expand-collapse-all-example.html',
  styleUrls: ['expansion-expand-collapse-all-example.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),
  ],
})
export class ExpansionExpandCollapseAllExample {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
  dataSource1 = ELEMENT_DATA1;
  columnsToDisplay = ['name', 'weight', 'symbol', 'position'];
  expandedElement: PeriodicElement | null;
  @ViewChild(MatAccordion) accordion: MatAccordion;
}
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  description: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    position: 1,
    name: 'Hydrogen',
    weight: 1.0079,
    symbol: 'H',
    description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard
        atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`,
  },
];

/**  Copyright 2022 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */
