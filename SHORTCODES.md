# Shortcodes

Reference for the custom Hugo shortcodes used in this site.

## Sidenote

Inline:

```md
Text before.{{< sidenote "Sidenote text." >}} Text after.
```

Block:

```md
{{< sidenote >}}
Sidenote text with **markdown**.
{{< /sidenote >}}
```

## Margin note

Inline:

```md
Text before.{{< marginnote "Margin note text." >}} Text after.
```

Block:

```md
{{< marginnote >}}
Margin note text with **markdown**.
{{< /marginnote >}}
```

Custom label:

```md
{{< marginnote label="+" text="Custom label note." >}}
```

## Figure

Standard width:

```md
{{< figure src="/img/figure-placeholder.svg" alt="Alt text" caption="Caption text." />}}
```

Full width:

```md
{{< figurewide src="/img/hero.jpg" alt="Alt text" caption="Full width caption." />}}
```

Margin figure:

```md
{{< marginfigure src="/img/portrait.jpg" alt="Alt text" caption="Margin caption." />}}
```
