import * as t from "https://deno.land/std/testing/asserts.ts";
import { DobutsuCode } from "./DobutsuCode.js";

Deno.test("encode", () => {
  t.assertEquals(DobutsuCode.encode(1000000), "アザラシ アイアイ アイアイ アイアイ");
  t.assertEquals(DobutsuCode.encode(999999), "ワラビー ワラビー ワラビー");
  t.assertEquals(DobutsuCode.encode(99999), "イヌ ワラビー ワラビー");
  t.assertEquals(DobutsuCode.encode(0, 3), "アイアイ アイアイ アイアイ");
  t.assertEquals(DobutsuCode.encode(123456, 3), "ウォンバット コヨーテ トナカイ");
});
Deno.test("decode", () => {
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
});
