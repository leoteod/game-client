export enum EnumEquipmentProps {
  id = "id",
  character_id = "character_id",
  boots_id = "boots_id",
  boots_options = "boots_options",
  earring_left_id = "earring_left_id",
  earring_left_options = "earring_left_options",
  earring_right_id = "earring_right_id",
  earring_right_options = "earring_right_options",
  gloves_id = "gloves_id",
  gloves_options = "gloves_options",
  head_id = "head_id",
  head_options = "head_options",
  ring_left_id = "ring_left_id",
  ring_left_options = "ring_left_options",
  ring_right_id = "ring_right_id",
  ring_right_options = "ring_right_options",
  shield_id = "shield_id",
  shield_options = "shield_options",
  suit_id = "suit_id",
  suit_options = "suit_options",
  weapon_id = "weapon_id",
  weapon_options = "weapon_options",
}

export enum EnumEquipmentItemProps {
  id = "id",
  type = "type",
  tier = "tier",
  hp = "hp",
  atk = "atk",
  def = "def",
  criticalDMG = "critical_dmg",
  criticalRate = "critical_rate",
  blockRate = "block_rate",
  power = "power",
  // Automatically generated readonly props
  level = "level",
  // Visual only for battle generation
  _currentHP = "current_hp",
}

export enum EnumEquipmentPowerMultiplierProps {
  hp = 100, // Divide by 100
  atk = 3, // Multiply by 3
  def = 2, // Multiply by 2
  criticalDMG = 10, // Multiply by 10
  criticalRate = 1000, // Multiply by 1000
  blockRate = 1000, // Multiply by 1000
}

export enum EnumEquipmentMaxValueProps {
  // hp = 100, // Divide by 100
  // atk = 3, // Multiply by 3
  // def = 2, // Multiply by 2
  // criticalDMG = 10,
  criticalRate = 0.8, // Max value 80%
  blockRate = 0.5, // Max value 50%
}

export enum EnumEquipmentTier {
  starter = "starter",
  common = "common",
  rare = "rare",
  epic = "epic",
  legendary = "legendary",
}

export enum EnumEquipmentType {
  boots = "boots",
  earring_left = "earring_left",
  earring_right = "earring_right",
  gloves = "gloves",
  head = "head",
  ring_left = "ring_left",
  ring_right = "ring_right",
  shield = "shield",
  suit = "suit",
  weapon = "weapon",
}
