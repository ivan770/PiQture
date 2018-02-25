# Settings

To change settings, open developer console **(F12 by default)**
Next, in console enter `settings.set(optionName, optionValue)`

By version 0.11, allowed optionName's are:
* developerKey : Change developer console key : int

Supported optionValue's:
* int
* string
* object

For example, to change **developerKey** to **F10**, enter `settings.set("developerKey", 121)`
