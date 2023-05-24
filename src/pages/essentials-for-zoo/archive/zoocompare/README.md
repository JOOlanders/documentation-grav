# Integration

### 1. Add the Compare element

The Compare element, provided with ZOOcompare, displays a button which will allow adding the Item to the comparison list. Go ahead and add the element to the Type which Items you would like to allow comparing:

![ZOOcompare - add Compare element to the item type](./assets/compare-add-element.png)

If you are not familiar with the process you can review the [ZOO](https://yootheme.com/support/zoo/item-types#extend-pre-built-item-types) guide.

### 2. Assign the Compare element to a render layout

Once the element is set in the Type, it must be assigned to some rendering layout, as for example the Teaser. Assign the element to the desired layout and configure as needed:

![ZOOcompare - add Compare element to the layout](./assets/compare-add-element-layout.png)

### 3. Set the comparison chart

Now that the compare button is in place, it allows adding the Items to the compare list and access the comparison chart. The Chart is very flexible and allows you to set, beside the Data to be compared, Headers, Groups, Tools and more. For setting it up open the  *Compare* layout assignment view for the App and Type you are setting up, then Drag & Drop the elements you would like to be part of the comparison chart:

![ZOOcompare - Compare layout](./assets/compare-chart-layout.png)

### 4. Fine tune the application settings

Finally, in the App Instance Configuration under the ZOOcompare Tab we can set the following App options:

- `Main Layout`: The layout that will be used to display the Chart.
- `Max Items`: The maximum amount if Items that could be added for comparing at a time.

![ZOOcompare tab in the application settings](./assets/application-zoocompare-tab.png)

> If there is no ZOOcompare section in the application settings, copy the application config file `/plugins/system/zoocompare/config/application/zoocompare.xml` to your application `/config` folder.
