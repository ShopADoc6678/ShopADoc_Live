<?php

namespace WPDesk\FCF\Free\Field\Type;

use WPDesk\FCF\Free\Field\Types;

/**
 * {@inheritdoc}
 */
class MultiCheckboxType extends TypeAbstract {

	const FIELD_TYPE = 'multicheckbox';

	/**
	 * {@inheritdoc}
	 */
	public function get_field_type(): string {
		return self::FIELD_TYPE;
	}

	/**
	 * {@inheritdoc}
	 */
	public function get_field_type_label(): string {
		return __( 'Multi-checkbox', 'flexible-checkout-fields' );
	}

	/**
	 * {@inheritdoc}
	 */
	public function get_field_group(): string {
		return Types::FIELD_GROUP_OPTION;
	}

	/**
	 * {@inheritdoc}
	 */
	public function get_field_type_icon(): string {
		return 'icon-check-square-multi';
	}

	/**
	 * {@inheritdoc}
	 */
	public function is_available(): bool {
		return false;
	}
}
