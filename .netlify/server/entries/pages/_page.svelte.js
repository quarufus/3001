import { k as ensure_array_like, l as attr, h as escape_html, e as pop, p as push } from "../../chunks/index.js";
import { init } from "@instantdb/core";
function _page($$payload, $$props) {
  push();
  const APP_ID = "e5cbbced-52f2-4815-a726-b7122a1fe4ae";
  init({ appId: APP_ID });
  let items = [];
  let input;
  $$payload.out += `<main class="svelte-m7ew7m">`;
  {
    $$payload.out += "<!--[!-->";
    const each_array = ensure_array_like(items);
    $$payload.out += `<div class="add-container svelte-m7ew7m"><div class="add svelte-m7ew7m"><input${attr("value", input)}> <button type="submit">Add</button></div></div> <!--[-->`;
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let item = each_array[$$index];
      $$payload.out += `<div class="item svelte-m7ew7m"><h3>${escape_html(item.text)}</h3> <div><input type="checkbox"${attr("checked", item.done, true)}> <button class="square svelte-m7ew7m">X</button></div></div>`;
    }
    $$payload.out += `<!--]-->`;
  }
  $$payload.out += `<!--]--></main>`;
  pop();
}
export {
  _page as default
};
