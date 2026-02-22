/**
 * Appliance Product Images Data
 * Brand-specific appliance images for hero sections and product showcases.
 * 189 images across 27 brands (WebP format)
 */

export interface ApplianceImage {
  brandSlug: string;
  brandName: string;
  applianceSlug: string;
  applianceName: string;
  src: string;
}

const ALL_APPLIANCE_IMAGES: ApplianceImage[] = [
  { brandSlug: 'amana', brandName: "Amana", applianceSlug: 'cooktop', applianceName: 'Cooktop', src: '/appliances/amana/cooktop.webp' },
  { brandSlug: 'amana', brandName: "Amana", applianceSlug: 'dishwasher', applianceName: 'Dishwasher', src: '/appliances/amana/dishwasher.webp' },
  { brandSlug: 'amana', brandName: "Amana", applianceSlug: 'dryer', applianceName: 'Dryer', src: '/appliances/amana/dryer.webp' },
  { brandSlug: 'amana', brandName: "Amana", applianceSlug: 'freezer', applianceName: 'Freezer', src: '/appliances/amana/freezer.webp' },
  { brandSlug: 'amana', brandName: "Amana", applianceSlug: 'microwave', applianceName: 'Microwave', src: '/appliances/amana/microwave.webp' },
  { brandSlug: 'amana', brandName: "Amana", applianceSlug: 'oven', applianceName: 'Range', src: '/appliances/amana/oven.webp' },
  { brandSlug: 'amana', brandName: "Amana", applianceSlug: 'refrigerator', applianceName: 'Refrigerator', src: '/appliances/amana/refrigerator.webp' },
  { brandSlug: 'amana', brandName: "Amana", applianceSlug: 'washer', applianceName: 'Washer', src: '/appliances/amana/washer.webp' },
  { brandSlug: 'bosch', brandName: "Bosch", applianceSlug: 'coffee-machine', applianceName: 'Coffee Machine', src: '/appliances/bosch/coffee-machine.webp' },
  { brandSlug: 'bosch', brandName: "Bosch", applianceSlug: 'cooktop', applianceName: 'Cooktop', src: '/appliances/bosch/cooktop.webp' },
  { brandSlug: 'bosch', brandName: "Bosch", applianceSlug: 'dishwasher', applianceName: 'Dishwasher', src: '/appliances/bosch/dishwasher.webp' },
  { brandSlug: 'bosch', brandName: "Bosch", applianceSlug: 'double-oven', applianceName: 'Double Oven', src: '/appliances/bosch/double-oven.webp' },
  { brandSlug: 'bosch', brandName: "Bosch", applianceSlug: 'dryer', applianceName: 'Dryer', src: '/appliances/bosch/dryer.webp' },
  { brandSlug: 'bosch', brandName: "Bosch", applianceSlug: 'microwave', applianceName: 'Microwave', src: '/appliances/bosch/microwave.webp' },
  { brandSlug: 'bosch', brandName: "Bosch", applianceSlug: 'oven', applianceName: 'Range', src: '/appliances/bosch/oven.webp' },
  { brandSlug: 'bosch', brandName: "Bosch", applianceSlug: 'range-hood', applianceName: 'Range Hood', src: '/appliances/bosch/range-hood.webp' },
  { brandSlug: 'bosch', brandName: "Bosch", applianceSlug: 'refrigerator', applianceName: 'Refrigerator', src: '/appliances/bosch/refrigerator.webp' },
  { brandSlug: 'bosch', brandName: "Bosch", applianceSlug: 'washer', applianceName: 'Washer', src: '/appliances/bosch/washer.webp' },
  { brandSlug: 'breville', brandName: "Breville", applianceSlug: 'coffee-machine', applianceName: 'Coffee Machine', src: '/appliances/breville/coffee-machine.webp' },
  { brandSlug: 'broan', brandName: "Broan", applianceSlug: 'range-hood', applianceName: 'Range Hood', src: '/appliances/broan/range-hood.webp' },
  { brandSlug: 'cafe', brandName: "Caf\u00e9", applianceSlug: 'cooktop', applianceName: 'Cooktop', src: '/appliances/cafe/cooktop.webp' },
  { brandSlug: 'cafe', brandName: "Caf\u00e9", applianceSlug: 'dishwasher', applianceName: 'Dishwasher', src: '/appliances/cafe/dishwasher.webp' },
  { brandSlug: 'cafe', brandName: "Caf\u00e9", applianceSlug: 'double-oven', applianceName: 'Double Oven', src: '/appliances/cafe/double-oven.webp' },
  { brandSlug: 'cafe', brandName: "Caf\u00e9", applianceSlug: 'dryer', applianceName: 'Dryer', src: '/appliances/cafe/dryer.webp' },
  { brandSlug: 'cafe', brandName: "Caf\u00e9", applianceSlug: 'microwave', applianceName: 'Microwave', src: '/appliances/cafe/microwave.webp' },
  { brandSlug: 'cafe', brandName: "Caf\u00e9", applianceSlug: 'oven', applianceName: 'Range', src: '/appliances/cafe/oven.webp' },
  { brandSlug: 'cafe', brandName: "Caf\u00e9", applianceSlug: 'refrigerator', applianceName: 'Refrigerator', src: '/appliances/cafe/refrigerator.webp' },
  { brandSlug: 'cafe', brandName: "Caf\u00e9", applianceSlug: 'washer', applianceName: 'Washer', src: '/appliances/cafe/washer.webp' },
  { brandSlug: 'delonghi', brandName: "De'Longhi", applianceSlug: 'coffee-machine', applianceName: 'Coffee Machine', src: '/appliances/delonghi/coffee-machine.webp' },
  { brandSlug: 'electrolux', brandName: "Electrolux", applianceSlug: 'cooktop', applianceName: 'Cooktop', src: '/appliances/electrolux/cooktop.webp' },
  { brandSlug: 'electrolux', brandName: "Electrolux", applianceSlug: 'dishwasher', applianceName: 'Dishwasher', src: '/appliances/electrolux/dishwasher.webp' },
  { brandSlug: 'electrolux', brandName: "Electrolux", applianceSlug: 'double-oven', applianceName: 'Double Oven', src: '/appliances/electrolux/double-oven.webp' },
  { brandSlug: 'electrolux', brandName: "Electrolux", applianceSlug: 'dryer', applianceName: 'Dryer', src: '/appliances/electrolux/dryer.webp' },
  { brandSlug: 'electrolux', brandName: "Electrolux", applianceSlug: 'microwave', applianceName: 'Microwave', src: '/appliances/electrolux/microwave.webp' },
  { brandSlug: 'electrolux', brandName: "Electrolux", applianceSlug: 'oven', applianceName: 'Range', src: '/appliances/electrolux/oven.webp' },
  { brandSlug: 'electrolux', brandName: "Electrolux", applianceSlug: 'refrigerator', applianceName: 'Refrigerator', src: '/appliances/electrolux/refrigerator.webp' },
  { brandSlug: 'electrolux', brandName: "Electrolux", applianceSlug: 'washer', applianceName: 'Washer', src: '/appliances/electrolux/washer.webp' },
  { brandSlug: 'electrolux', brandName: "Electrolux", applianceSlug: 'wine-cooler', applianceName: 'Wine Cooler', src: '/appliances/electrolux/wine-cooler.webp' },
  { brandSlug: 'fisher-paykel', brandName: "Fisher & Paykel", applianceSlug: 'cooktop', applianceName: 'Cooktop', src: '/appliances/fisher-paykel/cooktop.webp' },
  { brandSlug: 'fisher-paykel', brandName: "Fisher & Paykel", applianceSlug: 'dishwasher', applianceName: 'Dishwasher', src: '/appliances/fisher-paykel/dishwasher.webp' },
  { brandSlug: 'fisher-paykel', brandName: "Fisher & Paykel", applianceSlug: 'double-oven', applianceName: 'Double Oven', src: '/appliances/fisher-paykel/double-oven.webp' },
  { brandSlug: 'fisher-paykel', brandName: "Fisher & Paykel", applianceSlug: 'dryer', applianceName: 'Dryer', src: '/appliances/fisher-paykel/dryer.webp' },
  { brandSlug: 'fisher-paykel', brandName: "Fisher & Paykel", applianceSlug: 'oven', applianceName: 'Range', src: '/appliances/fisher-paykel/oven.webp' },
  { brandSlug: 'fisher-paykel', brandName: "Fisher & Paykel", applianceSlug: 'refrigerator', applianceName: 'Refrigerator', src: '/appliances/fisher-paykel/refrigerator.webp' },
  { brandSlug: 'fisher-paykel', brandName: "Fisher & Paykel", applianceSlug: 'washer', applianceName: 'Washer', src: '/appliances/fisher-paykel/washer.webp' },
  { brandSlug: 'frigidaire', brandName: "Frigidaire", applianceSlug: 'cooktop', applianceName: 'Cooktop', src: '/appliances/frigidaire/cooktop.webp' },
  { brandSlug: 'frigidaire', brandName: "Frigidaire", applianceSlug: 'dishwasher', applianceName: 'Dishwasher', src: '/appliances/frigidaire/dishwasher.webp' },
  { brandSlug: 'frigidaire', brandName: "Frigidaire", applianceSlug: 'double-oven', applianceName: 'Double Oven', src: '/appliances/frigidaire/double-oven.webp' },
  { brandSlug: 'frigidaire', brandName: "Frigidaire", applianceSlug: 'dryer', applianceName: 'Dryer', src: '/appliances/frigidaire/dryer.webp' },
  { brandSlug: 'frigidaire', brandName: "Frigidaire", applianceSlug: 'freezer', applianceName: 'Freezer', src: '/appliances/frigidaire/freezer.webp' },
  { brandSlug: 'frigidaire', brandName: "Frigidaire", applianceSlug: 'ice-maker', applianceName: 'Ice Maker', src: '/appliances/frigidaire/ice-maker.webp' },
  { brandSlug: 'frigidaire', brandName: "Frigidaire", applianceSlug: 'microwave', applianceName: 'Microwave', src: '/appliances/frigidaire/microwave.webp' },
  { brandSlug: 'frigidaire', brandName: "Frigidaire", applianceSlug: 'oven', applianceName: 'Range', src: '/appliances/frigidaire/oven.webp' },
  { brandSlug: 'frigidaire', brandName: "Frigidaire", applianceSlug: 'range-hood', applianceName: 'Range Hood', src: '/appliances/frigidaire/range-hood.webp' },
  { brandSlug: 'frigidaire', brandName: "Frigidaire", applianceSlug: 'refrigerator', applianceName: 'Refrigerator', src: '/appliances/frigidaire/refrigerator.webp' },
  { brandSlug: 'frigidaire', brandName: "Frigidaire", applianceSlug: 'washer', applianceName: 'Washer', src: '/appliances/frigidaire/washer.webp' },
  { brandSlug: 'frigidaire', brandName: "Frigidaire", applianceSlug: 'wine-cooler', applianceName: 'Wine Cooler', src: '/appliances/frigidaire/wine-cooler.webp' },
  { brandSlug: 'ge-appliances', brandName: "GE", applianceSlug: 'cooktop', applianceName: 'Cooktop', src: '/appliances/ge-appliances/cooktop.webp' },
  { brandSlug: 'ge-appliances', brandName: "GE", applianceSlug: 'dishwasher', applianceName: 'Dishwasher', src: '/appliances/ge-appliances/dishwasher.webp' },
  { brandSlug: 'ge-appliances', brandName: "GE", applianceSlug: 'double-oven', applianceName: 'Double Oven', src: '/appliances/ge-appliances/double-oven.webp' },
  { brandSlug: 'ge-appliances', brandName: "GE", applianceSlug: 'dryer', applianceName: 'Dryer', src: '/appliances/ge-appliances/dryer.webp' },
  { brandSlug: 'ge-appliances', brandName: "GE", applianceSlug: 'freezer', applianceName: 'Freezer', src: '/appliances/ge-appliances/freezer.webp' },
  { brandSlug: 'ge-appliances', brandName: "GE", applianceSlug: 'garbage-disposal', applianceName: 'Garbage Disposal', src: '/appliances/ge-appliances/garbage-disposal.webp' },
  { brandSlug: 'ge-appliances', brandName: "GE", applianceSlug: 'ice-maker', applianceName: 'Ice Maker', src: '/appliances/ge-appliances/ice-maker.webp' },
  { brandSlug: 'ge-appliances', brandName: "GE", applianceSlug: 'microwave', applianceName: 'Microwave', src: '/appliances/ge-appliances/microwave.webp' },
  { brandSlug: 'ge-appliances', brandName: "GE", applianceSlug: 'oven', applianceName: 'Range', src: '/appliances/ge-appliances/oven.webp' },
  { brandSlug: 'ge-appliances', brandName: "GE", applianceSlug: 'range-hood', applianceName: 'Range Hood', src: '/appliances/ge-appliances/range-hood.webp' },
  { brandSlug: 'ge-appliances', brandName: "GE", applianceSlug: 'refrigerator', applianceName: 'Refrigerator', src: '/appliances/ge-appliances/refrigerator.webp' },
  { brandSlug: 'ge-appliances', brandName: "GE", applianceSlug: 'trash-compactor', applianceName: 'Trash Compactor', src: '/appliances/ge-appliances/trash-compactor.webp' },
  { brandSlug: 'ge-appliances', brandName: "GE", applianceSlug: 'washer', applianceName: 'Washer', src: '/appliances/ge-appliances/washer.webp' },
  { brandSlug: 'ge-appliances', brandName: "GE", applianceSlug: 'wine-cooler', applianceName: 'Wine Cooler', src: '/appliances/ge-appliances/wine-cooler.webp' },
  { brandSlug: 'ge-profile', brandName: "GE Profile", applianceSlug: 'cooktop', applianceName: 'Cooktop', src: '/appliances/ge-profile/cooktop.webp' },
  { brandSlug: 'ge-profile', brandName: "GE Profile", applianceSlug: 'dishwasher', applianceName: 'Dishwasher', src: '/appliances/ge-profile/dishwasher.webp' },
  { brandSlug: 'ge-profile', brandName: "GE Profile", applianceSlug: 'double-oven', applianceName: 'Double Oven', src: '/appliances/ge-profile/double-oven.webp' },
  { brandSlug: 'ge-profile', brandName: "GE Profile", applianceSlug: 'dryer', applianceName: 'Dryer', src: '/appliances/ge-profile/dryer.webp' },
  { brandSlug: 'ge-profile', brandName: "GE Profile", applianceSlug: 'freezer', applianceName: 'Freezer', src: '/appliances/ge-profile/freezer.webp' },
  { brandSlug: 'ge-profile', brandName: "GE Profile", applianceSlug: 'ice-maker', applianceName: 'Ice Maker', src: '/appliances/ge-profile/ice-maker.webp' },
  { brandSlug: 'ge-profile', brandName: "GE Profile", applianceSlug: 'microwave', applianceName: 'Microwave', src: '/appliances/ge-profile/microwave.webp' },
  { brandSlug: 'ge-profile', brandName: "GE Profile", applianceSlug: 'oven', applianceName: 'Range', src: '/appliances/ge-profile/oven.webp' },
  { brandSlug: 'ge-profile', brandName: "GE Profile", applianceSlug: 'refrigerator', applianceName: 'Refrigerator', src: '/appliances/ge-profile/refrigerator.webp' },
  { brandSlug: 'ge-profile', brandName: "GE Profile", applianceSlug: 'washer', applianceName: 'Washer', src: '/appliances/ge-profile/washer.webp' },
  { brandSlug: 'haier', brandName: "Haier", applianceSlug: 'dryer', applianceName: 'Dryer', src: '/appliances/haier/dryer.webp' },
  { brandSlug: 'haier', brandName: "Haier", applianceSlug: 'freezer', applianceName: 'Freezer', src: '/appliances/haier/freezer.webp' },
  { brandSlug: 'haier', brandName: "Haier", applianceSlug: 'microwave', applianceName: 'Microwave', src: '/appliances/haier/microwave.webp' },
  { brandSlug: 'haier', brandName: "Haier", applianceSlug: 'refrigerator', applianceName: 'Refrigerator', src: '/appliances/haier/refrigerator.webp' },
  { brandSlug: 'haier', brandName: "Haier", applianceSlug: 'washer', applianceName: 'Washer', src: '/appliances/haier/washer.webp' },
  { brandSlug: 'haier', brandName: "Haier", applianceSlug: 'wine-cooler', applianceName: 'Wine Cooler', src: '/appliances/haier/wine-cooler.webp' },
  { brandSlug: 'jura', brandName: "Jura", applianceSlug: 'coffee-machine', applianceName: 'Coffee Machine', src: '/appliances/jura/coffee-machine.webp' },
  { brandSlug: 'kenmore', brandName: "Kenmore", applianceSlug: 'cooktop', applianceName: 'Cooktop', src: '/appliances/kenmore/cooktop.webp' },
  { brandSlug: 'kenmore', brandName: "Kenmore", applianceSlug: 'dishwasher', applianceName: 'Dishwasher', src: '/appliances/kenmore/dishwasher.webp' },
  { brandSlug: 'kenmore', brandName: "Kenmore", applianceSlug: 'dryer', applianceName: 'Dryer', src: '/appliances/kenmore/dryer.webp' },
  { brandSlug: 'kenmore', brandName: "Kenmore", applianceSlug: 'freezer', applianceName: 'Freezer', src: '/appliances/kenmore/freezer.webp' },
  { brandSlug: 'kenmore', brandName: "Kenmore", applianceSlug: 'ice-maker', applianceName: 'Ice Maker', src: '/appliances/kenmore/ice-maker.webp' },
  { brandSlug: 'kenmore', brandName: "Kenmore", applianceSlug: 'microwave', applianceName: 'Microwave', src: '/appliances/kenmore/microwave.webp' },
  { brandSlug: 'kenmore', brandName: "Kenmore", applianceSlug: 'oven', applianceName: 'Range', src: '/appliances/kenmore/oven.webp' },
  { brandSlug: 'kenmore', brandName: "Kenmore", applianceSlug: 'refrigerator', applianceName: 'Refrigerator', src: '/appliances/kenmore/refrigerator.webp' },
  { brandSlug: 'kenmore', brandName: "Kenmore", applianceSlug: 'washer', applianceName: 'Washer', src: '/appliances/kenmore/washer.webp' },
  { brandSlug: 'kitchenaid', brandName: "KitchenAid", applianceSlug: 'coffee-machine', applianceName: 'Coffee Machine', src: '/appliances/kitchenaid/coffee-machine.webp' },
  { brandSlug: 'kitchenaid', brandName: "KitchenAid", applianceSlug: 'cooktop', applianceName: 'Cooktop', src: '/appliances/kitchenaid/cooktop.webp' },
  { brandSlug: 'kitchenaid', brandName: "KitchenAid", applianceSlug: 'dishwasher', applianceName: 'Dishwasher', src: '/appliances/kitchenaid/dishwasher.webp' },
  { brandSlug: 'kitchenaid', brandName: "KitchenAid", applianceSlug: 'double-oven', applianceName: 'Double Oven', src: '/appliances/kitchenaid/double-oven.webp' },
  { brandSlug: 'kitchenaid', brandName: "KitchenAid", applianceSlug: 'dryer', applianceName: 'Dryer', src: '/appliances/kitchenaid/dryer.webp' },
  { brandSlug: 'kitchenaid', brandName: "KitchenAid", applianceSlug: 'freezer', applianceName: 'Freezer', src: '/appliances/kitchenaid/freezer.webp' },
  { brandSlug: 'kitchenaid', brandName: "KitchenAid", applianceSlug: 'garbage-disposal', applianceName: 'Garbage Disposal', src: '/appliances/kitchenaid/garbage-disposal.webp' },
  { brandSlug: 'kitchenaid', brandName: "KitchenAid", applianceSlug: 'ice-maker', applianceName: 'Ice Maker', src: '/appliances/kitchenaid/ice-maker.webp' },
  { brandSlug: 'kitchenaid', brandName: "KitchenAid", applianceSlug: 'microwave', applianceName: 'Microwave', src: '/appliances/kitchenaid/microwave.webp' },
  { brandSlug: 'kitchenaid', brandName: "KitchenAid", applianceSlug: 'oven', applianceName: 'Range', src: '/appliances/kitchenaid/oven.webp' },
  { brandSlug: 'kitchenaid', brandName: "KitchenAid", applianceSlug: 'range-hood', applianceName: 'Range Hood', src: '/appliances/kitchenaid/range-hood.webp' },
  { brandSlug: 'kitchenaid', brandName: "KitchenAid", applianceSlug: 'refrigerator', applianceName: 'Refrigerator', src: '/appliances/kitchenaid/refrigerator.webp' },
  { brandSlug: 'kitchenaid', brandName: "KitchenAid", applianceSlug: 'trash-compactor', applianceName: 'Trash Compactor', src: '/appliances/kitchenaid/trash-compactor.webp' },
  { brandSlug: 'kitchenaid', brandName: "KitchenAid", applianceSlug: 'washer', applianceName: 'Washer', src: '/appliances/kitchenaid/washer.webp' },
  { brandSlug: 'kitchenaid', brandName: "KitchenAid", applianceSlug: 'wine-cooler', applianceName: 'Wine Cooler', src: '/appliances/kitchenaid/wine-cooler.webp' },
  { brandSlug: 'lg', brandName: "LG", applianceSlug: 'cooktop', applianceName: 'Cooktop', src: '/appliances/lg/cooktop.webp' },
  { brandSlug: 'lg', brandName: "LG", applianceSlug: 'dishwasher', applianceName: 'Dishwasher', src: '/appliances/lg/dishwasher.webp' },
  { brandSlug: 'lg', brandName: "LG", applianceSlug: 'double-oven', applianceName: 'Double Oven', src: '/appliances/lg/double-oven.webp' },
  { brandSlug: 'lg', brandName: "LG", applianceSlug: 'dryer', applianceName: 'Dryer', src: '/appliances/lg/dryer.webp' },
  { brandSlug: 'lg', brandName: "LG", applianceSlug: 'freezer', applianceName: 'Freezer', src: '/appliances/lg/freezer.webp' },
  { brandSlug: 'lg', brandName: "LG", applianceSlug: 'ice-maker', applianceName: 'Ice Maker', src: '/appliances/lg/ice-maker.webp' },
  { brandSlug: 'lg', brandName: "LG", applianceSlug: 'microwave', applianceName: 'Microwave', src: '/appliances/lg/microwave.webp' },
  { brandSlug: 'lg', brandName: "LG", applianceSlug: 'oven', applianceName: 'Range', src: '/appliances/lg/oven.webp' },
  { brandSlug: 'lg', brandName: "LG", applianceSlug: 'refrigerator', applianceName: 'Refrigerator', src: '/appliances/lg/refrigerator.webp' },
  { brandSlug: 'lg', brandName: "LG", applianceSlug: 'washer', applianceName: 'Washer', src: '/appliances/lg/washer.webp' },
  { brandSlug: 'lg', brandName: "LG", applianceSlug: 'wine-cooler', applianceName: 'Wine Cooler', src: '/appliances/lg/wine-cooler.webp' },
  { brandSlug: 'maytag', brandName: "Maytag", applianceSlug: 'cooktop', applianceName: 'Cooktop', src: '/appliances/maytag/cooktop.webp' },
  { brandSlug: 'maytag', brandName: "Maytag", applianceSlug: 'dishwasher', applianceName: 'Dishwasher', src: '/appliances/maytag/dishwasher.webp' },
  { brandSlug: 'maytag', brandName: "Maytag", applianceSlug: 'dryer', applianceName: 'Dryer', src: '/appliances/maytag/dryer.webp' },
  { brandSlug: 'maytag', brandName: "Maytag", applianceSlug: 'freezer', applianceName: 'Freezer', src: '/appliances/maytag/freezer.webp' },
  { brandSlug: 'maytag', brandName: "Maytag", applianceSlug: 'ice-maker', applianceName: 'Ice Maker', src: '/appliances/maytag/ice-maker.webp' },
  { brandSlug: 'maytag', brandName: "Maytag", applianceSlug: 'microwave', applianceName: 'Microwave', src: '/appliances/maytag/microwave.webp' },
  { brandSlug: 'maytag', brandName: "Maytag", applianceSlug: 'oven', applianceName: 'Range', src: '/appliances/maytag/oven.webp' },
  { brandSlug: 'maytag', brandName: "Maytag", applianceSlug: 'range-hood', applianceName: 'Range Hood', src: '/appliances/maytag/range-hood.webp' },
  { brandSlug: 'maytag', brandName: "Maytag", applianceSlug: 'refrigerator', applianceName: 'Refrigerator', src: '/appliances/maytag/refrigerator.webp' },
  { brandSlug: 'maytag', brandName: "Maytag", applianceSlug: 'washer', applianceName: 'Washer', src: '/appliances/maytag/washer.webp' },
  { brandSlug: 'miele', brandName: "Miele", applianceSlug: 'coffee-machine', applianceName: 'Coffee Machine', src: '/appliances/miele/coffee-machine.webp' },
  { brandSlug: 'miele', brandName: "Miele", applianceSlug: 'cooktop', applianceName: 'Cooktop', src: '/appliances/miele/cooktop.webp' },
  { brandSlug: 'miele', brandName: "Miele", applianceSlug: 'dishwasher', applianceName: 'Dishwasher', src: '/appliances/miele/dishwasher.webp' },
  { brandSlug: 'miele', brandName: "Miele", applianceSlug: 'double-oven', applianceName: 'Double Oven', src: '/appliances/miele/double-oven.webp' },
  { brandSlug: 'miele', brandName: "Miele", applianceSlug: 'dryer', applianceName: 'Dryer', src: '/appliances/miele/dryer.webp' },
  { brandSlug: 'miele', brandName: "Miele", applianceSlug: 'washer', applianceName: 'Washer', src: '/appliances/miele/washer.webp' },
  { brandSlug: 'samsung', brandName: "Samsung", applianceSlug: 'cooktop', applianceName: 'Cooktop', src: '/appliances/samsung/cooktop.webp' },
  { brandSlug: 'samsung', brandName: "Samsung", applianceSlug: 'dishwasher', applianceName: 'Dishwasher', src: '/appliances/samsung/dishwasher.webp' },
  { brandSlug: 'samsung', brandName: "Samsung", applianceSlug: 'double-oven', applianceName: 'Double Oven', src: '/appliances/samsung/double-oven.webp' },
  { brandSlug: 'samsung', brandName: "Samsung", applianceSlug: 'dryer', applianceName: 'Dryer', src: '/appliances/samsung/dryer.webp' },
  { brandSlug: 'samsung', brandName: "Samsung", applianceSlug: 'freezer', applianceName: 'Freezer', src: '/appliances/samsung/freezer.webp' },
  { brandSlug: 'samsung', brandName: "Samsung", applianceSlug: 'ice-maker', applianceName: 'Ice Maker', src: '/appliances/samsung/ice-maker.webp' },
  { brandSlug: 'samsung', brandName: "Samsung", applianceSlug: 'microwave', applianceName: 'Microwave', src: '/appliances/samsung/microwave.webp' },
  { brandSlug: 'samsung', brandName: "Samsung", applianceSlug: 'oven', applianceName: 'Range', src: '/appliances/samsung/oven.webp' },
  { brandSlug: 'samsung', brandName: "Samsung", applianceSlug: 'refrigerator', applianceName: 'Refrigerator', src: '/appliances/samsung/refrigerator.webp' },
  { brandSlug: 'samsung', brandName: "Samsung", applianceSlug: 'washer', applianceName: 'Washer', src: '/appliances/samsung/washer.webp' },
  { brandSlug: 'samsung', brandName: "Samsung", applianceSlug: 'wine-cooler', applianceName: 'Wine Cooler', src: '/appliances/samsung/wine-cooler.webp' },
  { brandSlug: 'scotsman', brandName: "Scotsman", applianceSlug: 'ice-maker', applianceName: 'Ice Maker', src: '/appliances/scotsman/ice-maker.webp' },
  { brandSlug: 'speed-queen', brandName: "Speed Queen", applianceSlug: 'dryer', applianceName: 'Dryer', src: '/appliances/speed-queen/dryer.webp' },
  { brandSlug: 'speed-queen', brandName: "Speed Queen", applianceSlug: 'washer', applianceName: 'Washer', src: '/appliances/speed-queen/washer.webp' },
  { brandSlug: 'sub-zero', brandName: "Sub-Zero", applianceSlug: 'freezer', applianceName: 'Freezer', src: '/appliances/sub-zero/freezer.webp' },
  { brandSlug: 'sub-zero', brandName: "Sub-Zero", applianceSlug: 'refrigerator', applianceName: 'Refrigerator', src: '/appliances/sub-zero/refrigerator.webp' },
  { brandSlug: 'sub-zero', brandName: "Sub-Zero", applianceSlug: 'wine-cooler', applianceName: 'Wine Cooler', src: '/appliances/sub-zero/wine-cooler.webp' },
  { brandSlug: 'thermador', brandName: "Thermador", applianceSlug: 'cooktop', applianceName: 'Cooktop', src: '/appliances/thermador/cooktop.webp' },
  { brandSlug: 'thermador', brandName: "Thermador", applianceSlug: 'dishwasher', applianceName: 'Dishwasher', src: '/appliances/thermador/dishwasher.webp' },
  { brandSlug: 'thermador', brandName: "Thermador", applianceSlug: 'double-oven', applianceName: 'Double Oven', src: '/appliances/thermador/double-oven.webp' },
  { brandSlug: 'thermador', brandName: "Thermador", applianceSlug: 'freezer', applianceName: 'Freezer', src: '/appliances/thermador/freezer.webp' },
  { brandSlug: 'thermador', brandName: "Thermador", applianceSlug: 'oven', applianceName: 'Range', src: '/appliances/thermador/oven.webp' },
  { brandSlug: 'thermador', brandName: "Thermador", applianceSlug: 'range-hood', applianceName: 'Range Hood', src: '/appliances/thermador/range-hood.webp' },
  { brandSlug: 'thermador', brandName: "Thermador", applianceSlug: 'refrigerator', applianceName: 'Refrigerator', src: '/appliances/thermador/refrigerator.webp' },
  { brandSlug: 'thermador', brandName: "Thermador", applianceSlug: 'wine-cooler', applianceName: 'Wine Cooler', src: '/appliances/thermador/wine-cooler.webp' },
  { brandSlug: 'viking', brandName: "Viking", applianceSlug: 'cooktop', applianceName: 'Cooktop', src: '/appliances/viking/cooktop.webp' },
  { brandSlug: 'viking', brandName: "Viking", applianceSlug: 'dishwasher', applianceName: 'Dishwasher', src: '/appliances/viking/dishwasher.webp' },
  { brandSlug: 'viking', brandName: "Viking", applianceSlug: 'double-oven', applianceName: 'Double Oven', src: '/appliances/viking/double-oven.webp' },
  { brandSlug: 'viking', brandName: "Viking", applianceSlug: 'oven', applianceName: 'Range', src: '/appliances/viking/oven.webp' },
  { brandSlug: 'viking', brandName: "Viking", applianceSlug: 'range-hood', applianceName: 'Range Hood', src: '/appliances/viking/range-hood.webp' },
  { brandSlug: 'viking', brandName: "Viking", applianceSlug: 'refrigerator', applianceName: 'Refrigerator', src: '/appliances/viking/refrigerator.webp' },
  { brandSlug: 'viking', brandName: "Viking", applianceSlug: 'wine-cooler', applianceName: 'Wine Cooler', src: '/appliances/viking/wine-cooler.webp' },
  { brandSlug: 'whirlpool', brandName: "Whirlpool", applianceSlug: 'cooktop', applianceName: 'Cooktop', src: '/appliances/whirlpool/cooktop.webp' },
  { brandSlug: 'whirlpool', brandName: "Whirlpool", applianceSlug: 'dishwasher', applianceName: 'Dishwasher', src: '/appliances/whirlpool/dishwasher.webp' },
  { brandSlug: 'whirlpool', brandName: "Whirlpool", applianceSlug: 'double-oven', applianceName: 'Double Oven', src: '/appliances/whirlpool/double-oven.webp' },
  { brandSlug: 'whirlpool', brandName: "Whirlpool", applianceSlug: 'dryer', applianceName: 'Dryer', src: '/appliances/whirlpool/dryer.webp' },
  { brandSlug: 'whirlpool', brandName: "Whirlpool", applianceSlug: 'freezer', applianceName: 'Freezer', src: '/appliances/whirlpool/freezer.webp' },
  { brandSlug: 'whirlpool', brandName: "Whirlpool", applianceSlug: 'garbage-disposal', applianceName: 'Garbage Disposal', src: '/appliances/whirlpool/garbage-disposal.webp' },
  { brandSlug: 'whirlpool', brandName: "Whirlpool", applianceSlug: 'ice-maker', applianceName: 'Ice Maker', src: '/appliances/whirlpool/ice-maker.webp' },
  { brandSlug: 'whirlpool', brandName: "Whirlpool", applianceSlug: 'microwave', applianceName: 'Microwave', src: '/appliances/whirlpool/microwave.webp' },
  { brandSlug: 'whirlpool', brandName: "Whirlpool", applianceSlug: 'oven', applianceName: 'Range', src: '/appliances/whirlpool/oven.webp' },
  { brandSlug: 'whirlpool', brandName: "Whirlpool", applianceSlug: 'range-hood', applianceName: 'Range Hood', src: '/appliances/whirlpool/range-hood.webp' },
  { brandSlug: 'whirlpool', brandName: "Whirlpool", applianceSlug: 'refrigerator', applianceName: 'Refrigerator', src: '/appliances/whirlpool/refrigerator.webp' },
  { brandSlug: 'whirlpool', brandName: "Whirlpool", applianceSlug: 'trash-compactor', applianceName: 'Trash Compactor', src: '/appliances/whirlpool/trash-compactor.webp' },
  { brandSlug: 'whirlpool', brandName: "Whirlpool", applianceSlug: 'washer', applianceName: 'Washer', src: '/appliances/whirlpool/washer.webp' },
  { brandSlug: 'whirlpool', brandName: "Whirlpool", applianceSlug: 'wine-cooler', applianceName: 'Wine Cooler', src: '/appliances/whirlpool/wine-cooler.webp' },
  { brandSlug: 'wolf', brandName: "Wolf", applianceSlug: 'cooktop', applianceName: 'Cooktop', src: '/appliances/wolf/cooktop.webp' },
  { brandSlug: 'wolf', brandName: "Wolf", applianceSlug: 'double-oven', applianceName: 'Double Oven', src: '/appliances/wolf/double-oven.webp' },
  { brandSlug: 'wolf', brandName: "Wolf", applianceSlug: 'oven', applianceName: 'Range', src: '/appliances/wolf/oven.webp' },
  { brandSlug: 'zephyr', brandName: "Zephyr", applianceSlug: 'range-hood', applianceName: 'Range Hood', src: '/appliances/zephyr/range-hood.webp' },
];

// Appliance slugs that share the same product image
const SLUG_ALIASES: Record<string, string> = {
  'oven/stove': 'oven',
  'range': 'oven',
};

function resolveSlug(applianceSlug: string): string {
  return SLUG_ALIASES[applianceSlug] || applianceSlug;
}

/** Get a specific product image for a brand + appliance combination */
export function getApplianceImage(brandSlug: string, applianceSlug: string): ApplianceImage | undefined {
  const resolved = resolveSlug(applianceSlug);
  return ALL_APPLIANCE_IMAGES.find(
    img => img.brandSlug === brandSlug && img.applianceSlug === resolved
  );
}

/** Get all product images for a specific brand */
export function getApplianceImagesForBrand(brandSlug: string): ApplianceImage[] {
  return ALL_APPLIANCE_IMAGES.filter(img => img.brandSlug === brandSlug);
}

/** Get all brand product images for a specific appliance type */
export function getApplianceImagesForType(applianceSlug: string): ApplianceImage[] {
  const resolved = resolveSlug(applianceSlug);
  return ALL_APPLIANCE_IMAGES.filter(img => img.applianceSlug === resolved);
}

/** Best appliance types to showcase per brand (priority order for brand hero) */
const BRAND_HERO_APPLIANCE_PRIORITY = [
  'refrigerator', 'oven', 'dishwasher', 'washer',
  'dryer', 'cooktop', 'double-oven', 'freezer', 'range-hood',
  'ice-maker', 'microwave', 'wine-cooler', 'coffee-machine',
  'garbage-disposal', 'trash-compactor',
];

/** Get the best hero image for a brand page */
export function getBestImageForBrand(brandSlug: string): ApplianceImage | undefined {
  const images = getApplianceImagesForBrand(brandSlug);
  if (images.length === 0) return undefined;
  for (const applianceType of BRAND_HERO_APPLIANCE_PRIORITY) {
    const match = images.find(img => img.applianceSlug === applianceType);
    if (match) return match;
  }
  return images[0];
}

/** Default preferred brands for hero/showcase images */
const PREFERRED_BRANDS = [
  'samsung', 'lg', 'whirlpool', 'bosch', 'kitchenaid',
  'sub-zero', 'viking', 'thermador', 'wolf', 'miele',
];

/** Type-specific showcase overrides */
const SHOWCASE_OVERRIDES: Record<string, { imageType: string; brands: string[] }> = {
  'oven': { imageType: 'double-oven', brands: ['samsung', 'wolf', 'viking', 'thermador'] },
  'oven/stove': { imageType: 'double-oven', brands: ['samsung', 'wolf', 'viking', 'thermador'] },
  'range': { imageType: 'oven', brands: ['viking', 'thermador', 'samsung', 'lg'] },
  'washer': { imageType: 'washer', brands: ['lg', 'maytag', 'bosch', 'whirlpool'] },
  'dryer': { imageType: 'dryer', brands: ['bosch', 'lg', 'maytag', 'whirlpool'] },
};

/** Get the best showcase image for an appliance type */
export function getBestImageForType(applianceSlug: string): ApplianceImage | undefined {
  const override = SHOWCASE_OVERRIDES[applianceSlug];
  const imageType = override?.imageType || resolveSlug(applianceSlug);
  const brands = override?.brands || PREFERRED_BRANDS;

  const images = ALL_APPLIANCE_IMAGES.filter(img => img.applianceSlug === imageType);
  if (images.length === 0) return undefined;

  for (const brand of brands) {
    const match = images.find(img => img.brandSlug === brand);
    if (match) return match;
  }
  return images[0];
}
