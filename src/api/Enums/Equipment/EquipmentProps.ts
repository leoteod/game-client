export enum EnumEquipmentProps {
  account_id = "account_id",
  head_id = "head_id",
  head_options = "head_options",
  suit_id = "suit_id",
  suit_options = "suit_options",
}

export enum EnumEquipmentItemProps {
  type = "type",
  tier = "tier",
  exp = "exp",
  hp = "hp",
  atk = "atk",
  def = "def",
  criticalDMG = "criticalDMG",
  criticalRate = "criticalRate",
  blockRate = "blockRate",
  power = "power",
  // Automatically generated readonly props
  level = "level",
  // Visual only for battle generation
  _currentHP = "currentHP",
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
  head = "head",
  suit = "suit",
  boots = "boots",
  gloves = "gloves",
}
