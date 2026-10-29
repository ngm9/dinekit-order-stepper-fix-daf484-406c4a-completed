# DineKit — Menu Order Page

## Task Overview

DineKit builds lightweight ordering pages for independent restaurants. This repository holds a single menu order page where each dish appears in its own row with a minus/plus quantity stepper, and a running order total is shown at the bottom. A single delegated click handler on the dish list is responsible for working out which button — and which dish row — was clicked, then updating the quantity and the total. Right now clicking the icon inside a stepper button does nothing, and the order total sometimes uses the wrong dish's price, so it drifts away from the correct amount.

## Objectives

- Make a click anywhere on a minus or plus stepper button — including the small icon in the middle — reliably change the quantity for that button's own dish row.
- Ensure the order total always reflects the sum of each dish's own price multiplied by its own quantity, with no drift or mis-attribution.
- Keep quantities from going below zero and keep the total in sync after every change.
- Lay out the dish rows and steppers cleanly and responsively, with the order total clearly separated from the list, matching a tidy menu look.

## Helpful Tips

- Consider how a delegated click handler figures out which element was actually clicked when a button contains a nested icon, and how to resolve back up to the intended button.
- Think about where each dish's id and price live in the markup and how the handler reads them for the correct row rather than a neighbouring one.
- Explore how a flexible layout can align each dish name, its stepper, and its line price on a single readable row across screen sizes.
- Review how the total is recomputed after each change so it always sums the right price and quantity for every dish.

## How to Verify

- Open `index.html` in a browser and click directly on the icon in the centre of a minus or plus button: the quantity for that row should change.
- Increase and decrease quantities across several dishes and confirm the order total always equals the sum of each dish's price times its quantity.
- Confirm quantities never drop below zero and the total updates immediately after each click.
- Check that the rows, steppers, and total are laid out tidily and remain readable when the browser window is narrowed.
