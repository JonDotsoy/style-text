# style-text

This is a small library to style texts. Based on the Node.js utility `util.styleText(format, text)`.

## API `styleText(format, text)`

**Arguments:**

- `format` `<string>` | `<Array<string>>` The format of the text or an array of formats to be applied.
- `text` `<string>` Text to be formatted.

**Returns:** Formatted text with ANSI escape codes.

```js
import { styleText } from "@jondotsoy/style-text";

styleText("red", "hello"); // => "\u001B[31mHello\u001B[39m"
```

## API `unstyleText(text)`

**Arguments:**

- `text` `<string>` Text to remove formatting.

**Returns:** Text without format.

```js
import { unstyleText } from "@jondotsoy/style-text";

unstyleText("\u001B[31mHello\u001B[39m"); // => "Hello"
```

## ColorCodes

The following color codes are supported:

- `reset` - Reset formatting.
- `bold` - Bold text.
- `dim` - Dim text.
- `italic` - Italic text.
- `underline` - Underline text.
- `blink` - Blinking text.
- `inverse` - Inverse video effect.
- `hidden` - Hidden text.
- `strikethrough` - Strikethrough text.
- `doubleunderline` - Double underline text.
- `black` - Black text on default background.
- `red` - Red text on default background.
- `green` - Green text on default background.
- `yellow` - Yellow text on default background.
- `blue` - Blue text on default background.
- `magenta` - Magenta text on default background.
- `cyan` - Cyan text on default background.
- `white` - White text on default background.
- `bgBlack` - Black background.
- `bgRed` - Red background.
- `bgGreen` - Green background.
- `bgYellow` - Yellow background.
- `bgBlue` - Blue background.
- `bgMagenta` - Magenta background.
- `bgCyan` - Cyan background.
- `bgWhite` - White background.
- `framed` - Framed text.
- `overlined` - Overlined text.
- `gray` - Gray text on default background.
- `redBright` - Bright red text on default background.
- `greenBright` - Bright green text on default background.
- `yellowBright` - Bright yellow text on default background.
- `blueBright` - Bright blue text on default background.
- `magentaBright` - Bright magenta text on default background.
- `cyanBright` - Bright cyan text on default background.
- `whiteBright` - Bright white text on default background.
- `bgGray` - Gray background.
- `bgRedBright` - Bright red background.
- `bgGreenBright` - Bright green background.
- `bgYellowBright` - Bright yellow background.
- `bgBlueBright` - Bright blue background.
- `bgMagentaBright` - Bright magenta background.
- `bgCyanBright` - Bright cyan background.
- `bgWhiteBright` - Bright white background.

## License

This project is licensed under the MIT License. See [LICENSE](./LICENSE) for details.
