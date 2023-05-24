# Elements

## ZOOcart

When adding the Element to a Type, the following configuration is available under the **Specific** section:

- `Enabled by default`: The product state, when enabled all Type products will be allowed for purchase. If disabled, the product should be individually enabled on the **Item Edit** view.
- `Item Type`: The product Type. Can be **Product**, physical good that requires shipping, **Digital**, digital good that does not require shipping or **Subscription**, a special product that would create a subscription after checkout.

When setting the Element in a position for rendering, the following configuration is available under the **Layout** section:

- `Main Layout`: The rendering layout. Currently only **Default** layout is available rendering the AddToCart form.
- `Default label`: The label for the AddToCart button when the product is not in the Cart.
- `In the cart label`: The label for the AddToCart button when the product is already in the Cart.
- `Action after Add`: The action to execute when the product has been added to Cart, none or redirect to the Cart view.
- `Show quantity inputs`: Enable or disable the quantity input that would be rendered beside the button.
- `Avoid Re Add`: Allows to disable the AddToCart button once the product has been added.

## PricePro

When adding the Element to a Type, the following configuration is available under the **Specific** section:

- `Default`: The default price value when new product is created.

## Quantity

When adding the Element to a Type, the following configuration is available under the **Specific** section:

- `Default`: The default stock value when new product is created.

## Variations

When adding the Element to a Type, the following configuration is available under the **Specific** section:

> The Specific Variations element settings will be displayed the first time after the Type has been saved.

- `Elements`: The list of Elements that would be possible to override by each Variation. Not compatible with JS dependent elements, like Image Gallery or Media
- `Attributes`: The list of Variation attributes composed by a **key** and **value**.

> It is allowed to add only one Variations element. Product attributes should be the different Attribute instances of one element.

When setting the Element in a position for rendering, the following configuration is available under the **Layout** section:

- `Show Attribute Label`: Enable or disable the Variations Attribute label rendering on the dropdown.

## MeasuresPro

When adding the Element to a Type, the following configuration is available under the **Specific** section:

- `Default`: The default stock value when new product is created.
- `Unit`: The measuring unit.
