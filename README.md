# DobutsuCode 動物コード

動物100種類で100進法！

## デモアプリ

- [動物コード デモ](https://pcn-club.github.io/DobutsuCode/)
- [動物コード 時計](https://pcn-club.github.io/DobutsuCode/clock.html)

## オープンデータ

- [動物100種CSV](dobutsucode.csv)
- [https://pcn-club.github.io/DobutsuCode/dobutsucode.csv](https://pcn-club.github.io/DobutsuCode/dobutsucode.csv) (CORS対応)

## テストコード

```js
import * as t from "https://deno.land/std/testing/asserts.ts";
import { DobutsuCode } from "./DobutsuCode.js";

Deno.test("encode", () => {
  t.assertEquals(DobutsuCode.encode(0), "アイアイ");
  t.assertEquals(DobutsuCode.encode(1), "アザラシ");
  t.assertEquals(DobutsuCode.encode(99), "ワラビー");
  t.assertEquals(DobutsuCode.encode(100), "アザラシ アイアイ");
  t.assertEquals(DobutsuCode.encode(-1), "-アザラシ");
  t.assertEquals(DobutsuCode.encode(-100), "-アザラシ アイアイ");
  t.assertEquals(DobutsuCode.encode(1000000), "アザラシ アイアイ アイアイ アイアイ");
  t.assertEquals(DobutsuCode.encode(999999), "ワラビー ワラビー ワラビー");
  t.assertEquals(DobutsuCode.encode(99999), "イヌ ワラビー ワラビー");
  t.assertEquals(DobutsuCode.encode(0, 3), "アイアイ アイアイ アイアイ");
  t.assertEquals(DobutsuCode.encode(123456, 3), "ウォンバット コヨーテ トナカイ");
});
Deno.test("decode", () => {
  t.assertEquals(DobutsuCode.decode("アイアイ"), 0);
  t.assertEquals(DobutsuCode.decode("アザラシ"), 1);
  t.assertEquals(DobutsuCode.decode("-アザラシ"), -1);
  t.assertEquals(DobutsuCode.decode("-アザラシ アイアイ"), -100);
  t.assertEquals(DobutsuCode.decode("アザラシ アイアイ アイアイ アイアイ"), 1000000);
  t.assertEquals(DobutsuCode.decode("ワラビー ワラビー ワラビー"), 999999);
  t.assertEquals(DobutsuCode.decode("イヌ ワラビー ワラビー"), 99999);
  t.assertEquals(DobutsuCode.decode("アイアイ アイアイ アイアイ"), 0);
  t.assertEquals(DobutsuCode.decode("ウォンバット コヨーテ トナカイ"), 123456);
});
Deno.test("decode_sp", () => {
  t.assertEquals(DobutsuCode.decode("アザラシ,アイアイ　アイアイ\tアイアイ"), 1000000);
  t.assertEquals(DobutsuCode.decode("  ワラビー   ワラビー  ワラビー "), 999999);
  t.assertEquals(DobutsuCode.decode("イヌ,ワラビー,ワラビー"), 99999);
  t.assertEquals(DobutsuCode.decode("イヌ,ワラビー,ワラビー"), 99999);
  t.assertEquals(DobutsuCode.decode(null), 0);
  t.assertEquals(DobutsuCode.decode("DOG"), 0);
  t.assertEquals(DobutsuCode.decode("イヌ,恐竜,ワラビー"), 0);
});
Deno.test("encode_sp", () => {
  t.assertEquals(DobutsuCode.encode("one"), "アイアイ");
  t.assertEquals(DobutsuCode.encode(null), "アイアイ");
  t.assertEquals(DobutsuCode.encode("1"), "アザラシ");
});
```
[テストコード](DobutsuCode.test.js)

```
deno test
```

coverage
```
rm -rf ./coverage
deno test -A --coverage=coverage
deno coverage ./coverage
```
DobutsuCode.js ... 98.039% (50/51)


