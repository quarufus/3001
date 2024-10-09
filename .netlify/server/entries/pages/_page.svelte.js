import { m as rest_props, o as fallback, q as ensure_array_like, t as spread_attributes, v as element, h as slot, w as bind_props, f as pop, x as sanitize_props, p as push, y as spread_props, z as attr, A as stringify, k as escape_html } from "../../chunks/index.js";
import { init, tx } from "@instantdb/core";
/**
 * @license lucide-svelte v0.451.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": 2,
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
};
function Icon($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, [
    "name",
    "color",
    "size",
    "strokeWidth",
    "absoluteStrokeWidth",
    "iconNode"
  ]);
  push();
  let name = fallback($$props["name"], void 0);
  let color = fallback($$props["color"], "currentColor");
  let size = fallback($$props["size"], 24);
  let strokeWidth = fallback($$props["strokeWidth"], 2);
  let absoluteStrokeWidth = fallback($$props["absoluteStrokeWidth"], false);
  let iconNode = fallback($$props["iconNode"], () => [], true);
  const mergeClasses = (...classes) => classes.filter((className, index, array) => {
    return Boolean(className) && array.indexOf(className) === index;
  }).join(" ");
  const each_array = ensure_array_like(iconNode);
  $$payload.out += `<svg${spread_attributes(
    {
      ...defaultAttributes,
      ...$$restProps,
      width: size,
      height: size,
      stroke: color,
      "stroke-width": absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
      class: mergeClasses("lucide-icon", "lucide", name ? `lucide-${name}` : "", $$sanitized_props.class)
    },
    void 0,
    void 0,
    3
  )}><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let [tag, attrs] = each_array[$$index];
    element($$payload, tag, () => {
      $$payload.out += `${spread_attributes({ ...attrs }, void 0, void 0, 3)}`;
    });
  }
  $$payload.out += `<!--]--><!---->`;
  slot($$payload, $$props, "default", {});
  $$payload.out += `<!----></svg>`;
  bind_props($$props, {
    name,
    color,
    size,
    strokeWidth,
    absoluteStrokeWidth,
    iconNode
  });
  pop();
}
function Trash_2($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    ["path", { "d": "M3 6h18" }],
    [
      "path",
      { "d": "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" }
    ],
    [
      "path",
      { "d": "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" }
    ],
    [
      "line",
      {
        "x1": "10",
        "x2": "10",
        "y1": "11",
        "y2": "17"
      }
    ],
    [
      "line",
      {
        "x1": "14",
        "x2": "14",
        "y1": "11",
        "y2": "17"
      }
    ]
  ];
  Icon($$payload, spread_props([
    { name: "trash-2" },
    $$sanitized_props,
    {
      iconNode,
      children: ($$payload2) => {
        $$payload2.out += `<!---->`;
        slot($$payload2, $$props, "default", {});
        $$payload2.out += `<!---->`;
      },
      $$slots: { default: true }
    }
  ]));
}
function Switch($$payload, $$props) {
  push();
  let item = $$props["item"];
  let toggle = $$props["toggle"];
  $$payload.out += `<label class="relative inline-block w-[60px] h-[34px]"><input class="opacity-0 w-0 h-0 svelte-1w1bamc" type="checkbox"${attr("checked", item.done, true)}> <span class="slider round svelte-1w1bamc"></span></label>`;
  bind_props($$props, { item, toggle });
  pop();
}
function _page($$payload, $$props) {
  push();
  const APP_ID = "e5cbbced-52f2-4815-a726-b7122a1fe4ae";
  const colors = {
    grey: "bg-my-grey",
    red: "bg-my-red",
    green: "bg-my-green",
    blue: "bg-my-blue",
    orange: "bg-my-orange",
    pink: "bg-my-pink",
    teal: "bg-my-teal"
  };
  const db = init({ appId: APP_ID });
  let items = [];
  let input;
  let expanded = false;
  function toggleDone(item) {
    db.transact(tx.items[item.id].update({ done: !item.done }));
  }
  $$payload.out += `<main class="flex flex-col items-center w-screen p-5">`;
  {
    $$payload.out += "<!--[!-->";
    const each_array = ensure_array_like(Object.entries(colors));
    const each_array_1 = ensure_array_like(items);
    $$payload.out += `<div class="add-container svelte-11jg9x4"><div class="border-2 border-black p-2 rounded-md"><div class="flex"><input${attr("value", input)} class="border-2 border-black rounded-md p-2 grow m-5"> <button type="submit" class="bg-my-orange rounded-md p-2 m-5">Add</button></div> <div${attr("hidden", !expanded, true)}><!--[-->`;
    for (let i = 0, $$length = each_array.length; i < $$length; i++) {
      let [title, color] = each_array[i];
      $$payload.out += `<label${attr("class", `${stringify(color)} w-10 h-10 relative inline-block m-5 rounded-md svelte-11jg9x4`)}>`;
      if (i == 0) {
        $$payload.out += "<!--[-->";
        $$payload.out += `<input id="picker"${attr("class", `${stringify(color)} opacity-0 h-0 w-0 peer svelte-11jg9x4`)} type="radio" name="colors"${attr("value", color)} checked>`;
      } else {
        $$payload.out += "<!--[!-->";
        $$payload.out += `<input id="picker"${attr("class", `${stringify(color)} opacity-0 h-0 w-0 peer svelte-11jg9x4`)} type="radio" name="colors"${attr("value", color)}>`;
      }
      $$payload.out += `<!--]--> <span${attr("class", `w-10 h-10 ${stringify(color)} cursor-pointer absolute rounded-md peer-checked:border-2 peer-checked:border-black svelte-11jg9x4`)}></span></label>`;
    }
    $$payload.out += `<!--]--></div></div></div> <!--[-->`;
    for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
      let item = each_array_1[$$index_1];
      $$payload.out += `<div${attr("class", `flex lg:w-2/3 md:w-4/5 w-full justify-between items-center px-8 py-5 ${stringify(colors[item.color])} rounded-md my-5 svelte-11jg9x4`)}><h3>${escape_html(item.text)}</h3> <div class="flex items-center gap-4">`;
      Switch($$payload, { item, toggle: () => toggleDone(item) });
      $$payload.out += `<!----> <button>`;
      Trash_2($$payload, {});
      $$payload.out += `<!----></button></div></div>`;
    }
    $$payload.out += `<!--]-->`;
  }
  $$payload.out += `<!--]--></main>`;
  pop();
}
export {
  _page as default
};
