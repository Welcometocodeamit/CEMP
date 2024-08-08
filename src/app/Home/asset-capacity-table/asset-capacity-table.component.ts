import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-asset-capacity-table',
  templateUrl: './asset-capacity-table.component.html',
  styleUrls: ['./asset-capacity-table.component.scss'],
})


export class AssetCapacityTableComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  displayedColumns: string[] = ['Asset Type', 'Asset Capacity(kWh)', 'Available Capacity(kWh)', 'Available Assets'];

  assetDetails: assetDetail[] = [
    {assetType: 'Thermostat', totalCapacity: 449.24, availableCapacity:332.90, availableAssets:2290},
    {assetType: 'Switch', totalCapacity: 1831.46, availableCapacity:1134.62, availableAssets:4330},
    {assetType: 'Battery', totalCapacity: 947.545, availableCapacity:513.227, availableAssets:312},
    {assetType: 'EV', totalCapacity: 1393.15, availableCapacity:1102.794, availableAssets:749},
  ];

  /** Gets the total cost of all transactions. */
  getTotalCost(item: string) {
    return this.assetDetails
      .map(t => {
        const value = Number(t[item as keyof typeof t]);
        return value;
      })
      .reduce((acc, value) => acc + value, 0);
  }

  getRowColor(index: number, type: 'header' | 'body' | 'footer'): string {

    if (type === 'header') {
      return '#2A3D4E';  // Light gray for header row
    } else if (type === 'footer' && this.assetDetails.length % 2 ==0) {
      return '#203446';  // Slightly different gray for footer row
    } else if (type === 'footer' && this.assetDetails.length % 2 !=0) {
      return '#2A3D4E';  // Slightly different gray for footer row
    }
    else {
      // Alternating colors for body rows
      return index % 2 === 0 ? '#203446' : '#2A3D4E';  // Light gray and white for body rows
    }
  }

  getCellColour(assetType:string): string{

    if (assetType == 'Thermostat'){
      return '#FFD200'
    }else if(assetType == 'Switch'){
      return '#00789E'
    }else if(assetType == 'Battery'){
      return '#54B948'
    }else{
      return '#26BCD7'
    }

  }

}

interface assetDetail {
  assetType: string;
  totalCapacity: number;
  availableCapacity:number
  availableAssets:number
}

