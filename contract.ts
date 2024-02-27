import { initContract } from "@ts-rest/core";
import * as z from "zod";

const c = initContract();

const adminCreateWalletRequest = z.object({
  id: z.string(),
  display_name: z.string(),
  status: z.string(),
});
const adminCreateWalletResponse = z
  .object({
    client_ids: z.array(z.string()),
    status: z.string(),
    display_name: z.string(),
    id: z.string(),
  })
  .and(
    z.object({
      deleted_at: z.string(),
      updated_at: z.string(),
      created_at: z.string(),
    })
  );
const errorResponse = z.object({
  code: z.union([z.string(), z.number()]),
  message: z.string(),
  details: z.any(),
});
const adminCreateWalletConfigRequest = z
  .object({
    secure: z.object({
      payments: z.object({
        checkouts: z.object({ opapi: z.object({}) }),
        payment_instruments: z.object({
          loyalty: z.object({}),
          bank_cards: z.object({
            schemes: z.object({
              visa: z.any(),
              mastercard: z.any(),
              eftpos: z.any(),
              amex: z.any(),
            }),
          }),
        }),
      }),
      identity: z.object({}),
      global: z.object({}),
    }),
    open: z.object({ appearance: z.object({}) }),
  })
  .and(z.object({ active: z.boolean(), configuration_name: z.string() }));
const createUserProfileRequest = z.object({
  mobile_number: z.string(),
  mobile_verified_at: z.string(),
  email: z.string(),
  email_verified_at: z.string(),
  handle: z.string(),
  first_name: z.string(),
  last_name: z.string(),
  registration_client_id: z.string(),
  external_provider_id: z.string(),
  wallet_id: z.string(),
});
const createUserProfileResponse = z.object({
  id: z.string(),
  mobile_number: z.string(),
  mobile_verified_at: z.string(),
  mobile_number_locked: z.boolean(),
  email: z.string(),
  email_verified: z.boolean(),
  email_verified_at: z.string(),
  idvm_verified: z.boolean(),
  handle: z.string(),
  created_at: z.string(),
  updated_at: z.string(),
  first_name: z.string(),
  middle_name: z.string(),
  last_name: z.string(),
  birth_date: z.string(),
  avatar_url: z.string(),
  display_name: z.string(),
  can_receive_payment: z.boolean(),
  fcm_registration_token: z.string(),
  green_id_verification_id: z.string(),
  green_id_verification_source: z.string(),
  green_id_verification_at: z.string(),
  deleted_at: z.string(),
  payments_suspended: z.boolean(),
  source: z.string(),
  terms: z.object({
    must_accept_by: z.string(),
    accepted_at: z.string(),
    reason: z.string(),
    accepted: z.boolean(),
    link: z.string(),
    revision: z.union([z.number(), z.string()]),
    version: z.union([z.number(), z.string()]),
    id: z.union([z.number(), z.string()]),
  }),
  activated_account: z.boolean(),
  required_idvm_count: z.number(),
  idvm_sources: z.array(z.string()),
  wallets: z.array(
    z.object({
      metadata: z.object({ migrated_at: z.string() }),
      status_change_feedback: z.string(),
      status_change_reason: z.string(),
      registration_client_id: z.string(),
      deleted_at: z.string(),
      restricted_at: z.string(),
      flag_marketing_consent_at: z.string(),
      latest_login_at: z.string(),
      wallet_id: z.string(),
      first_login_at: z.string(),
      registered_at: z.string(),
      user_id: z.string(),
    })
  ),
  suspended_at: z.string(),
  wallet_id: z.string(),
  registration_client_id: z.string(),
});
const getProfileByUserIdResponse = z.object({
  id: z.string(),
  handle: z.string(),
  email: z.string(),
  mobile_number: z.string(),
  first_name: z.string(),
  middle_name: z.string(),
  last_name: z.string(),
  birth_date: z.string(),
  avatar_url: z.string(),
  display_name: z.string(),
  can_receive_payment: z.boolean(),
  mobile_verified_at: z.string(),
  email_verified_at: z.string(),
  wallets: z.array(
    z.object({
      metadata: z.object({ migrated_at: z.string() }),
      status_change_feedback: z.string(),
      status_change_reason: z.string(),
      registration_client_id: z.string(),
      deleted_at: z.string(),
      restricted_at: z.string(),
      flag_marketing_consent_at: z.string(),
      latest_login_at: z.string(),
      wallet_id: z.string(),
      first_login_at: z.string(),
      registered_at: z.string(),
      user_id: z.string(),
    })
  ),
  is_blocked: z.boolean(),
  created_at: z.string(),
  deleted_at: z.string(),
  shipping_address: z.object({ id: z.string() }).and(
    z
      .union([
        z.object({
          suburb: z.string(),
          state: z.string(),
          postcode: z.string(),
          user_id: z.string(),
          company_name: z.string(),
          recipient_name: z.string(),
          country_code: z.string(),
          phone: z.string(),
          email: z.string(),
          delivery_instruction: z.string(),
          nickname: z.string(),
          address_line_2: z.string(),
          address_line_1: z.string(),
        }),
        z.object({
          suburb: z.string(),
          state: z.string(),
          postcode: z.string(),
          user_id: z.string(),
          company_name: z.string(),
          recipient_name: z.string(),
          country_code: z.string(),
          phone: z.string(),
          email: z.string(),
          delivery_instruction: z.string(),
          nickname: z.string(),
          unit_and_level_address: z.string(),
          street_address: z.string(),
        }),
      ])
      .and(
        z.object({
          timestamps: z.object({
            deleted_at: z.string(),
            updated_at: z.string(),
            created_at: z.string(),
          }),
        })
      )
  ),
  billing_address: z.object({ id: z.string() }).and(
    z
      .union([
        z.object({
          suburb: z.string(),
          state: z.string(),
          postcode: z.string(),
          user_id: z.string(),
          company_name: z.string(),
          recipient_name: z.string(),
          country_code: z.string(),
          phone: z.string(),
          email: z.string(),
          delivery_instruction: z.string(),
          nickname: z.string(),
          address_line_2: z.string(),
          address_line_1: z.string(),
        }),
        z.object({
          suburb: z.string(),
          state: z.string(),
          postcode: z.string(),
          user_id: z.string(),
          company_name: z.string(),
          recipient_name: z.string(),
          country_code: z.string(),
          phone: z.string(),
          email: z.string(),
          delivery_instruction: z.string(),
          nickname: z.string(),
          unit_and_level_address: z.string(),
          street_address: z.string(),
        }),
      ])
      .and(
        z.object({
          timestamps: z.object({
            deleted_at: z.string(),
            updated_at: z.string(),
            created_at: z.string(),
          }),
        })
      )
  ),
});
const adminDeleteUserRequest = z.object({
  reason: z.string(),
  feedback: z.string(),
});
const listProfilesByWalletIdResponse = z.object({
  total_count: z.any(),
  next_key: z.string(),
  users: z.array(
    z.object({
      id: z.string(),
      handle: z.string(),
      mobile_number: z.string(),
      email: z.string(),
      first_name: z.string(),
      middle_name: z.string(),
      last_name: z.string(),
      created_at: z.string(),
      updated_at: z.string(),
      deleted_at: z.string(),
      is_blocked: z.boolean(),
      wallet: z.object({
        deleted_at: z.string(),
        restricted_at: z.string(),
        flag_marketing_consent_at: z.string(),
        latest_login_at: z.string(),
        first_login_at: z.string(),
        registered_at: z.string(),
        wallet_id: z.string(),
      }),
    })
  ),
});
const adminProfileUserWallet = z.object({
  wallet: z.object({
    deleted_at: z.string(),
    registration_client_id: z.string(),
    registered_at: z.string(),
    first_login_at: z.string(),
    latest_login_at: z.string(),
    flag_marketing_consent_at: z.string(),
    restricted_at: z.string(),
    status_change_reason: z.string(),
    status_change_feedback: z.string(),
    metadata: z.object({ migrated_at: z.string() }),
  }),
  is_blocked: z.boolean(),
  id: z.string(),
  mobile_number: z.string(),
  mobile_verified_at: z.string(),
  mobile_number_locked: z.boolean(),
  email: z.string(),
  email_verified: z.boolean(),
  email_verified_at: z.string(),
  idvm_verified: z.boolean(),
  handle: z.string(),
  created_at: z.string(),
  updated_at: z.string(),
  first_name: z.string(),
  middle_name: z.string(),
  last_name: z.string(),
  birth_date: z.string(),
  avatar_url: z.string(),
  display_name: z.string(),
  can_receive_payment: z.boolean(),
  fcm_registration_token: z.string(),
  green_id_verification_id: z.string(),
  green_id_verification_source: z.string(),
  green_id_verification_at: z.string(),
  deleted_at: z.string(),
  payments_suspended: z.boolean(),
  source: z.string(),
  terms: z.object({
    must_accept_by: z.string(),
    accepted_at: z.string(),
    reason: z.string(),
    accepted: z.boolean(),
    link: z.string(),
    revision: z.union([z.number(), z.string()]),
    version: z.union([z.number(), z.string()]),
    id: z.union([z.number(), z.string()]),
  }),
  activated_account: z.boolean(),
  required_idvm_count: z.number(),
  idvm_sources: z.array(z.string()),
  suspended_at: z.string(),
  shipping: z.string(),
  billing: z.string(),
  addresses: z.object({}),
});
const updateUserWalletRequest = z.object({
  subscribe_to_marketing_content: z.boolean(),
});
const updateUserWalletResponse = z.object({
  metadata: z.object({ migrated_at: z.string() }),
  status_change_feedback: z.string(),
  status_change_reason: z.string(),
  registration_client_id: z.string(),
  deleted_at: z.string(),
  restricted_at: z.string(),
  flag_marketing_consent_at: z.string(),
  latest_login_at: z.string(),
  wallet_id: z.string(),
  first_login_at: z.string(),
  registered_at: z.string(),
  user_id: z.string(),
});
const adminEmailUpdateRequest = z.object({
  user_id: z.string(),
  email: z.string(),
});
const adminVerifyEmailUpdateRequest = z.object({
  user_id: z.string(),
  verification_code: z.string(),
});
const adminMobileNumberUpdateRequest = z.object({
  user_id: z.string(),
  mobile_number: z.string(),
});
const adminVerifyMobileNumberUpdateRequest = z.object({
  user_id: z.string(),
  mobile_number: z.string(),
  verification_code: z.string(),
});
const migrateUserProfileRequest = z.object({
  updated_at: z.string(),
  created_at: z.string(),
  status_change_feedback: z.string(),
  status_change_reason: z.string(),
  deleted_at: z.string(),
  suspended_at: z.string(),
  flag_marketing_consent_at: z.string(),
  registration_client_id: z.string(),
  email_verified: z.boolean(),
  wallet_id: z.string(),
  last_name: z.string(),
  first_name: z.string(),
  mobile_number: z.string(),
  email: z.string(),
  external_provider_id: z.string(),
});
const migrateUserProfileResponse = z.object({
  error: z.object({
    details: z.union([z.object({}), z.array(z.object({}))]),
    message: z.string(),
  }),
  migration_status: z.string(),
  internal_id: z.string(),
  external_id: z.string(),
});
const docErrorResponse = z.object({
  code: z.union([z.string(), z.number()]),
  message: z.string(),
  details: z.any(),
});
const migrateUserAddressRequest = z
  .union([
    z.object({
      suburb: z.string(),
      state: z.string(),
      postcode: z.string(),
      user_id: z.string(),
      company_name: z.string(),
      recipient_name: z.string(),
      country_code: z.string(),
      phone: z.string(),
      email: z.string(),
      delivery_instruction: z.string(),
      nickname: z.string(),
      address_line_2: z.string(),
      address_line_1: z.string(),
    }),
    z.object({
      suburb: z.string(),
      state: z.string(),
      postcode: z.string(),
      user_id: z.string(),
      company_name: z.string(),
      recipient_name: z.string(),
      country_code: z.string(),
      phone: z.string(),
      email: z.string(),
      delivery_instruction: z.string(),
      nickname: z.string(),
      unit_and_level_address: z.string(),
      street_address: z.string(),
    }),
  ])
  .and(
    z.object({ is_billing: z.boolean(), is_shipping: z.boolean() }).and(
      z.object({
        deleted_at: z.string(),
        updated_at: z.string(),
        created_at: z.string(),
      })
    )
  )
  .and(
    z.object({
      user_id: z.string(),
      updated_at: z.string(),
      created_at: z.string(),
      id: z.string(),
    })
  );
const migrateUserAddressResponse = z.object({
  error: z.object({
    details: z.union([z.object({}), z.array(z.object({}))]),
    message: z.string(),
  }),
  internal_id: z.string(),
  external_id: z.string(),
});
const getUserProfileResponse = z.object({
  suspended_at: z.string(),
  wallets: z.array(
    z.object({
      metadata: z.object({ migrated_at: z.string() }),
      status_change_feedback: z.string(),
      status_change_reason: z.string(),
      registration_client_id: z.string(),
      deleted_at: z.string(),
      restricted_at: z.string(),
      flag_marketing_consent_at: z.string(),
      latest_login_at: z.string(),
      wallet_id: z.string(),
      first_login_at: z.string(),
      registered_at: z.string(),
      user_id: z.string(),
    })
  ),
  idvm_sources: z.array(z.string()),
  required_idvm_count: z.number(),
  activated_account: z.boolean(),
  terms: z.object({
    must_accept_by: z.string(),
    accepted_at: z.string(),
    reason: z.string(),
    accepted: z.boolean(),
    link: z.string(),
    revision: z.union([z.number(), z.string()]),
    version: z.union([z.number(), z.string()]),
    id: z.union([z.number(), z.string()]),
  }),
  source: z.string(),
  payments_suspended: z.boolean(),
  deleted_at: z.string(),
  green_id_verification_at: z.string(),
  green_id_verification_source: z.string(),
  green_id_verification_id: z.string(),
  fcm_registration_token: z.string(),
  can_receive_payment: z.boolean(),
  display_name: z.string(),
  avatar_url: z.string(),
  birth_date: z.string(),
  last_name: z.string(),
  middle_name: z.string(),
  first_name: z.string(),
  updated_at: z.string(),
  created_at: z.string(),
  handle: z.string(),
  idvm_verified: z.boolean(),
  email_verified_at: z.string(),
  email_verified: z.boolean(),
  email: z.string(),
  mobile_number_locked: z.boolean(),
  mobile_verified_at: z.string(),
  mobile_number: z.string(),
  id: z.string(),
  shipping_address: z.object({ id: z.string() }).and(
    z
      .union([
        z.object({
          suburb: z.string(),
          state: z.string(),
          postcode: z.string(),
          user_id: z.string(),
          company_name: z.string(),
          recipient_name: z.string(),
          country_code: z.string(),
          phone: z.string(),
          email: z.string(),
          delivery_instruction: z.string(),
          nickname: z.string(),
          address_line_2: z.string(),
          address_line_1: z.string(),
        }),
        z.object({
          suburb: z.string(),
          state: z.string(),
          postcode: z.string(),
          user_id: z.string(),
          company_name: z.string(),
          recipient_name: z.string(),
          country_code: z.string(),
          phone: z.string(),
          email: z.string(),
          delivery_instruction: z.string(),
          nickname: z.string(),
          unit_and_level_address: z.string(),
          street_address: z.string(),
        }),
      ])
      .and(
        z.object({
          timestamps: z.object({
            deleted_at: z.string(),
            updated_at: z.string(),
            created_at: z.string(),
          }),
        })
      )
  ),
  billing_address: z.object({ id: z.string() }).and(
    z
      .union([
        z.object({
          suburb: z.string(),
          state: z.string(),
          postcode: z.string(),
          user_id: z.string(),
          company_name: z.string(),
          recipient_name: z.string(),
          country_code: z.string(),
          phone: z.string(),
          email: z.string(),
          delivery_instruction: z.string(),
          nickname: z.string(),
          address_line_2: z.string(),
          address_line_1: z.string(),
        }),
        z.object({
          suburb: z.string(),
          state: z.string(),
          postcode: z.string(),
          user_id: z.string(),
          company_name: z.string(),
          recipient_name: z.string(),
          country_code: z.string(),
          phone: z.string(),
          email: z.string(),
          delivery_instruction: z.string(),
          nickname: z.string(),
          unit_and_level_address: z.string(),
          street_address: z.string(),
        }),
      ])
      .and(
        z.object({
          timestamps: z.object({
            deleted_at: z.string(),
            updated_at: z.string(),
            created_at: z.string(),
          }),
        })
      )
  ),
  current_wallet_id: z.string(),
});
const updateUserProfileRequest = z.object({
  display_name: z.string(),
  handle: z.string(),
  avatar_url: z.string(),
  fcm_registration_token: z.string(),
  email: z.string(),
  first_name: z.string(),
  last_name: z.string(),
  middle_name: z.string(),
  consents: z.array(
    z.object({
      participant_id: z.string(),
      agreement_id: z.string(),
      agreement_version: z.number(),
      granted: z.boolean(),
    })
  ),
});
const updateUserProfileResponse = z.object({
  suspended_at: z.string(),
  wallets: z.array(
    z.object({
      metadata: z.object({ migrated_at: z.string() }),
      status_change_feedback: z.string(),
      status_change_reason: z.string(),
      registration_client_id: z.string(),
      deleted_at: z.string(),
      restricted_at: z.string(),
      flag_marketing_consent_at: z.string(),
      latest_login_at: z.string(),
      wallet_id: z.string(),
      first_login_at: z.string(),
      registered_at: z.string(),
      user_id: z.string(),
    })
  ),
  idvm_sources: z.array(z.string()),
  required_idvm_count: z.number(),
  activated_account: z.boolean(),
  terms: z.object({
    must_accept_by: z.string(),
    accepted_at: z.string(),
    reason: z.string(),
    accepted: z.boolean(),
    link: z.string(),
    revision: z.union([z.number(), z.string()]),
    version: z.union([z.number(), z.string()]),
    id: z.union([z.number(), z.string()]),
  }),
  source: z.string(),
  payments_suspended: z.boolean(),
  deleted_at: z.string(),
  green_id_verification_at: z.string(),
  green_id_verification_source: z.string(),
  green_id_verification_id: z.string(),
  fcm_registration_token: z.string(),
  can_receive_payment: z.boolean(),
  display_name: z.string(),
  avatar_url: z.string(),
  birth_date: z.string(),
  last_name: z.string(),
  middle_name: z.string(),
  first_name: z.string(),
  updated_at: z.string(),
  created_at: z.string(),
  handle: z.string(),
  idvm_verified: z.boolean(),
  email_verified_at: z.string(),
  email_verified: z.boolean(),
  email: z.string(),
  mobile_number_locked: z.boolean(),
  mobile_verified_at: z.string(),
  mobile_number: z.string(),
  id: z.string(),
  shipping_address: z.object({ id: z.string() }).and(
    z
      .union([
        z.object({
          suburb: z.string(),
          state: z.string(),
          postcode: z.string(),
          user_id: z.string(),
          company_name: z.string(),
          recipient_name: z.string(),
          country_code: z.string(),
          phone: z.string(),
          email: z.string(),
          delivery_instruction: z.string(),
          nickname: z.string(),
          address_line_2: z.string(),
          address_line_1: z.string(),
        }),
        z.object({
          suburb: z.string(),
          state: z.string(),
          postcode: z.string(),
          user_id: z.string(),
          company_name: z.string(),
          recipient_name: z.string(),
          country_code: z.string(),
          phone: z.string(),
          email: z.string(),
          delivery_instruction: z.string(),
          nickname: z.string(),
          unit_and_level_address: z.string(),
          street_address: z.string(),
        }),
      ])
      .and(
        z.object({
          timestamps: z.object({
            deleted_at: z.string(),
            updated_at: z.string(),
            created_at: z.string(),
          }),
        })
      )
  ),
  billing_address: z.object({ id: z.string() }).and(
    z
      .union([
        z.object({
          suburb: z.string(),
          state: z.string(),
          postcode: z.string(),
          user_id: z.string(),
          company_name: z.string(),
          recipient_name: z.string(),
          country_code: z.string(),
          phone: z.string(),
          email: z.string(),
          delivery_instruction: z.string(),
          nickname: z.string(),
          address_line_2: z.string(),
          address_line_1: z.string(),
        }),
        z.object({
          suburb: z.string(),
          state: z.string(),
          postcode: z.string(),
          user_id: z.string(),
          company_name: z.string(),
          recipient_name: z.string(),
          country_code: z.string(),
          phone: z.string(),
          email: z.string(),
          delivery_instruction: z.string(),
          nickname: z.string(),
          unit_and_level_address: z.string(),
          street_address: z.string(),
        }),
      ])
      .and(
        z.object({
          timestamps: z.object({
            deleted_at: z.string(),
            updated_at: z.string(),
            created_at: z.string(),
          }),
        })
      )
  ),
  current_wallet_id: z.string(),
});
const deleteProfileRequest = z.object({
  reason: z.string(),
  feedback: z.string(),
});
const listAddressesResponse = z.object({
  shipping: z.string(),
  billing: z.string(),
  addresses: z.object({}),
});
const createAddressRequest = z
  .union([
    z.object({
      suburb: z.string(),
      state: z.string(),
      postcode: z.string(),
      user_id: z.string(),
      company_name: z.string(),
      recipient_name: z.string(),
      country_code: z.string(),
      phone: z.string(),
      email: z.string(),
      delivery_instruction: z.string(),
      nickname: z.string(),
      address_line_2: z.string(),
      address_line_1: z.string(),
    }),
    z.object({
      suburb: z.string(),
      state: z.string(),
      postcode: z.string(),
      user_id: z.string(),
      company_name: z.string(),
      recipient_name: z.string(),
      country_code: z.string(),
      phone: z.string(),
      email: z.string(),
      delivery_instruction: z.string(),
      nickname: z.string(),
      unit_and_level_address: z.string(),
      street_address: z.string(),
    }),
  ])
  .and(
    z.object({ is_billing: z.boolean(), is_shipping: z.boolean() }).and(
      z.object({
        deleted_at: z.string(),
        updated_at: z.string(),
        created_at: z.string(),
      })
    )
  );
const createAddressResponse = z
  .object({ id: z.string() })
  .and(
    z
      .union([
        z.object({
          suburb: z.string(),
          state: z.string(),
          postcode: z.string(),
          user_id: z.string(),
          company_name: z.string(),
          recipient_name: z.string(),
          country_code: z.string(),
          phone: z.string(),
          email: z.string(),
          delivery_instruction: z.string(),
          nickname: z.string(),
          address_line_2: z.string(),
          address_line_1: z.string(),
        }),
        z.object({
          suburb: z.string(),
          state: z.string(),
          postcode: z.string(),
          user_id: z.string(),
          company_name: z.string(),
          recipient_name: z.string(),
          country_code: z.string(),
          phone: z.string(),
          email: z.string(),
          delivery_instruction: z.string(),
          nickname: z.string(),
          unit_and_level_address: z.string(),
          street_address: z.string(),
        }),
      ])
      .and(
        z.object({
          timestamps: z.object({
            deleted_at: z.string(),
            updated_at: z.string(),
            created_at: z.string(),
          }),
        })
      )
  )
  .and(z.object({ is_billing: z.boolean(), is_shipping: z.boolean() }));
const updateAddressRequest = z.object({
  suburb: z.string(),
  state: z.string(),
  postcode: z.string(),
  user_id: z.string(),
  company_name: z.string(),
  recipient_name: z.string(),
  country_code: z.string(),
  phone: z.string(),
  email: z.string(),
  delivery_instruction: z.string(),
  nickname: z.string(),
  is_shipping: z.boolean(),
  is_billing: z.boolean(),
  created_at: z.string(),
  updated_at: z.string(),
  deleted_at: z.string(),
});
const updateAddressResponse = z.object({
  id: z.string(),
  suburb: z.string(),
  state: z.string(),
  postcode: z.string(),
  user_id: z.string(),
  company_name: z.string(),
  recipient_name: z.string(),
  country_code: z.string(),
  phone: z.string(),
  email: z.string(),
  delivery_instruction: z.string(),
  nickname: z.string(),
  timestamps: z.object({
    deleted_at: z.string(),
    updated_at: z.string(),
    created_at: z.string(),
  }),
});
const initiateEmailUpdateRequest = z.object({
  email: z.string(),
  flow_type: z.string(),
});
const mobileNumberUpdateRequest = z.object({ mobile_number: z.string() });
const finalizeEmailUpdateRequest = z.object({
  user_id: z.string(),
  sub: z.string(),
  email: z.string(),
});
const verifyEmailUpdateRequest = z.object({ verification_code: z.string() });
const verifyMobileNumberUpdateRequest = z.object({
  mobile_number: z.string(),
  verification_code: z.string(),
});
const webhook = z.object({
  id: z.string(),
  recordedAt: z.union([z.string(), z.string()]),
  correlationId: z.string(),
  action: z.object({ description: z.string(), type: z.string() }),
  actors: z.object({
    user: z.object({
      href: z.string(),
      population: z.object({ id: z.string() }),
      environment: z.object({ id: z.string() }),
      name: z.string(),
      type: z.string(),
      id: z.string(),
    }),
    client: z.object({
      href: z.string(),
      environment: z.object({ id: z.string() }),
      name: z.string(),
      type: z.string(),
      id: z.string(),
    }),
  }),
  resources: z.array(
    z.object({
      href: z.string(),
      population: z.object({ id: z.string() }),
      environment: z.object({ id: z.string() }),
      name: z.string(),
      type: z.string(),
      id: z.string(),
    })
  ),
  result: z.object({ description: z.string(), status: z.string() }),
  _embedded: z.any(),
});
const adminListPaymentMethodsResponse = z.array(
  z.union([
    z.object({
      id: z.string(),
      alias: z.string(),
      type: z.string(),
      status: z.string(),
      data: z.object({
        visualization: z.object({
          card_image_url: z.string(),
          last_four_digits: z.string(),
        }),
        issuer_name: z.string(),
        expiry: z.object({ year: z.string(), month: z.string() }),
        type: z.string(),
        schemes: z.array(z.string()),
      }),
      timestamps: z.object({ updated_at: z.string(), created_at: z.string() }),
      is_default_receive: z.boolean(),
      is_default_pay: z.boolean(),
    }),
    z.object({
      id: z.string(),
      alias: z.string(),
      type: z.string(),
      status: z.string(),
      data: z.object({
        bar_code_format: z.string(),
        bar_code: z.string(),
        pin: z.string(),
        proxy_id: z.string(),
        refresh_token: z.string(),
        access_token: z.string(),
      }),
      timestamps: z.object({ updated_at: z.string(), created_at: z.string() }),
      is_default_receive: z.boolean(),
      is_default_pay: z.boolean(),
    }),
    z
      .object({
        id: z.string(),
        alias: z.string(),
        type: z.string(),
        status: z.string(),
        data: z.object({
          bar_code_format: z.string(),
          bar_code: z.string(),
          pin: z.string(),
        }),
        timestamps: z.object({
          updated_at: z.string(),
          created_at: z.string(),
        }),
        is_default_receive: z.boolean(),
        is_default_pay: z.boolean(),
      })
      .and(
        z
          .object({
            live_data: z.union([
              z.object({
                redemption_allowed: z.boolean(),
                card_number: z.string(),
                exchange_rate: z.number(),
                points_date: z.string(),
                points_balance: z.number(),
                last_name: z.string(),
                first_name: z.string(),
              }),
              z.object({}),
            ]),
            linked_date: z.string(),
            program: z.union([
              z.object({
                name: z.string(),
                id: z.string(),
                type: z.string(),
                display: z.object({ color: z.string(), logo: z.string() }),
                scheme: z.string(),
              }),
              z.object({
                name: z.string(),
                display: z.object({ color: z.string(), logo: z.string() }),
                type: z.string(),
              }),
            ]),
          })
          .and(
            z.object({
              validation_data: z.object({
                available_users_count: z.number(),
                max_users_allowed: z.number(),
              }),
            })
          )
      )
      .and(
        z.object({
          live: z.object({ reason: z.string(), status: z.boolean() }),
        })
      ),
    z.object({
      id: z.string(),
      alias: z.string(),
      type: z.string(),
      status: z.string(),
      data: z.object({}),
      timestamps: z.object({ updated_at: z.string(), created_at: z.string() }),
      is_default_receive: z.boolean(),
      is_default_pay: z.boolean(),
    }),
  ])
);
const listOrdersResponse = z.object({
  next_key: z.string(),
  orders: z.array(
    z
      .object({
        details: z.object({
          order: z.object({
            discounted_items: z.array(
              z.object({
                amount: z.object({ currency: z.string(), value: z.string() }),
                description: z.string(),
                quantity: z.number(),
                id: z.string(),
                uri: z.string(),
                discount: z.object({
                  value: z.string(),
                  description: z.string(),
                  currency: z.string(),
                }),
                tax: z.object({
                  value: z.string(),
                  description: z.string(),
                  currency: z.string(),
                }),
              })
            ),
            returns: z.array(
              z.object({
                amount: z.number(),
                items: z.array(
                  z.object({
                    amount: z.object({
                      currency: z.string(),
                      value: z.string(),
                    }),
                    description: z.string(),
                    quantity: z.number(),
                    id: z.string(),
                    uri: z.string(),
                    discount: z.object({
                      value: z.string(),
                      description: z.string(),
                      currency: z.string(),
                    }),
                    tax: z.object({
                      value: z.string(),
                      description: z.string(),
                      currency: z.string(),
                    }),
                  })
                ),
              })
            ),
            description: z.string(),
            payments: z.array(
              z.object({
                payment_id: z.string(),
                status: z.string(),
                amount: z.object({ currency: z.string(), value: z.string() }),
                created_datetime: z.string(),
                payment_reference: z.string(),
                transactions: z.array(
                  z.union([
                    z.object({
                      transaction_id: z.string(),
                      authorization: z.object({
                        status: z.string(),
                        next_action: z.object({
                          type: z.string(),
                          parameters: z.union([
                            z.object({
                              three_ds_server_trans_id: z.string(),
                              acs_transaction_id: z.string(),
                              acs_signed_content: z.string(),
                              acs_reference_number: z.string(),
                              three_ds_server_url: z.string(),
                              three_ds_browser_fields: z.string(),
                            }),
                            z.object({}),
                          ]),
                        }),
                        expiry_datetime: z.string(),
                        auth_detailed_status: z.string(),
                        masked_number: z.string(),
                        transaction_reference: z.string(),
                      }),
                      amount: z.object({
                        currency: z.string(),
                        value: z.string(),
                      }),
                      transaction_type: z.string(),
                      status: z.string(),
                      gateway_datetime: z.string(),
                      gateway_reference: z.string(),
                      transaction_reference: z.string(),
                      errors: z.array(z.object({ message: z.string() })),
                      metadata: z.object({}),
                      card_type: z.string(),
                      card: z.object({
                        card_reference: z.string(),
                        type: z.string(),
                        expiry_date: z.string(),
                        account_type: z.string(),
                        scheme: z.string(),
                        masked_pan: z.string(),
                        last_4: z.string(),
                      }),
                      settlement_date: z.string(),
                      processed: z.string(),
                      three_ds: z.object({
                        xid: z.string(),
                        provider: z.string(),
                        cavv: z.string(),
                        eci: z.string(),
                      }),
                      terminal_id: z.string(),
                      system_trace_audit_number: z.string(),
                      retrieval_reference_number: z.string(),
                      trace: z.string(),
                    }),
                    z.object({
                      transaction_id: z.string(),
                      authorization: z.object({
                        status: z.string(),
                        next_action: z.object({
                          type: z.string(),
                          parameters: z.union([
                            z.object({
                              three_ds_server_trans_id: z.string(),
                              acs_transaction_id: z.string(),
                              acs_signed_content: z.string(),
                              acs_reference_number: z.string(),
                              three_ds_server_url: z.string(),
                              three_ds_browser_fields: z.string(),
                            }),
                            z.object({}),
                          ]),
                        }),
                        expiry_datetime: z.string(),
                        auth_detailed_status: z.string(),
                        masked_number: z.string(),
                        transaction_reference: z.string(),
                      }),
                      amount: z.object({
                        currency: z.string(),
                        value: z.string(),
                      }),
                      transaction_type: z.string(),
                      status: z.string(),
                      gateway_datetime: z.string(),
                      gateway_reference: z.string(),
                      transaction_reference: z.string(),
                      errors: z.array(z.object({ message: z.string() })),
                      metadata: z.object({}),
                      short_transaction_id: z.string(),
                      card_type: z.string(),
                      card: z.object({
                        card_reference: z.string(),
                        type: z.string(),
                        identifier: z.string(),
                        provider: z.string(),
                      }),
                      points_used: z.number(),
                      exchange_rate: z.number(),
                    }),
                  ])
                ),
              })
            ),
            accepted_payment_instruments: z.array(
              z.union([
                z.object({
                  type: z.string(),
                  configuration: z.object({
                    max_points_burn: z.number(),
                    min_points_burn: z.number(),
                    allow_burn: z.boolean(),
                    allow_earn: z.boolean(),
                  }),
                  name: z.string(),
                  provider: z.string(),
                }),
                z.object({ type: z.string(), schemes: z.array(z.string()) }),
              ])
            ),
            user_information: z.object({
              name: z.object({ given_name: z.string(), surname: z.string() }),
              email: z.string(),
              phone: z.string(),
              address: z.object({
                street: z.string(),
                suburb: z.string(),
                state: z.string(),
                postcode: z.string(),
                country: z.string(),
              }),
              custom_user_attributes: z.object({}),
            }),
            user_information_attribute_request: z.object({
              name: z.object({ capture: z.boolean(), required: z.boolean() }),
              email: z.object({ capture: z.boolean(), required: z.boolean() }),
              phone: z.object({ capture: z.boolean(), required: z.boolean() }),
              address: z.object({
                capture: z.boolean(),
                required: z.boolean(),
              }),
              custom_user_attributes: z.object({}),
            }),
            wallet: z.object({
              wallet_user_id: z.string(),
              wallet_id: z.string(),
              wallet_name: z.string(),
              wallet_status: z.string(),
              wallet_aggregator_id: z.string(),
              wallet_experience_id: z.string(),
              callback_base_url: z.string(),
            }),
            non_payment_instruments: z.array(
              z.object({
                type: z.string(),
                provider: z.string(),
                name: z.string(),
                identifier: z.string(),
                metadata: z.object({}),
              })
            ),
            payment_workflow: z.string(),
            config: z.object({
              merchant_reference: z.string(),
              merchant_name: z.string(),
              location: z.string(),
              terminal_id: z.string(),
              card_acceptor_name: z.string(),
              card_acceptor_location: z.object({
                city: z.string(),
                address_line_2: z.string(),
                address_line_1: z.string(),
                state: z.string(),
                country: z.string(),
                postcode: z.string(),
              }),
            }),
            metadata: z.object({}),
            merchant: z.object({ id: z.string(), name: z.string() }),
            approval: z.object({ merchant: z.boolean(), wallet: z.boolean() }),
            force_3_ds: z.boolean(),
            restricted_item_types: z.object({
              giftcard: z.object({ present: z.boolean() }),
              loyalty: z.object({ present: z.boolean() }),
            }),
            items: z.array(
              z.object({
                amount: z.object({ currency: z.string(), value: z.string() }),
                description: z.string(),
                quantity: z.number(),
                id: z.string(),
                uri: z.string(),
                discount: z.object({
                  value: z.string(),
                  description: z.string(),
                  currency: z.string(),
                }),
                tax: z.object({
                  value: z.string(),
                  description: z.string(),
                  currency: z.string(),
                }),
              })
            ),
            deferred_payment_expiry_datetime: z.string(),
            expiry_datetime: z.string(),
            updated_datetime: z.string(),
            created_datetime: z.string(),
            amount: z.object({
              total: z.string(),
              currency: z.string(),
              breakdown: z.object({
                shipping: z.object({ currency: z.string(), value: z.string() }),
                handling: z.object({ currency: z.string(), value: z.string() }),
                tax_total: z.object({
                  currency: z.string(),
                  value: z.string(),
                }),
                insurance: z.object({
                  currency: z.string(),
                  value: z.string(),
                }),
                shipping_discount: z.object({
                  currency: z.string(),
                  value: z.string(),
                }),
                discount: z.object({ currency: z.string(), value: z.string() }),
                tax: z.object({ currency: z.string(), value: z.string() }),
              }),
            }),
            payment_context: z.string(),
            status: z.string(),
            order_reference: z.string(),
            qr: z.object({ content: z.string() }),
            order_id: z.string(),
          }),
        }),
        refund_amount: z.number(),
        cancelled_at: z.string(),
        expires_at: z.string(),
        brand_name: z.string(),
        brand_id: z.string(),
        status: z.string(),
        payee_type: z.string(),
        type: z.string(),
        payee_name: z.string(),
        payee_id: z.string(),
        amount: z.number(),
        wallet_id: z.string(),
        user_id: z.string(),
        id: z.string(),
      })
      .and(
        z.object({
          deleted_at: z.string(),
          updated_at: z.string(),
          created_at: z.string(),
        })
      )
  ),
});
const getOrderByIdResponse = z
  .object({
    details: z.object({
      order: z.object({
        discounted_items: z.array(
          z.object({
            amount: z.object({ currency: z.string(), value: z.string() }),
            description: z.string(),
            quantity: z.number(),
            id: z.string(),
            uri: z.string(),
            discount: z.object({
              value: z.string(),
              description: z.string(),
              currency: z.string(),
            }),
            tax: z.object({
              value: z.string(),
              description: z.string(),
              currency: z.string(),
            }),
          })
        ),
        returns: z.array(
          z.object({
            amount: z.number(),
            items: z.array(
              z.object({
                amount: z.object({ currency: z.string(), value: z.string() }),
                description: z.string(),
                quantity: z.number(),
                id: z.string(),
                uri: z.string(),
                discount: z.object({
                  value: z.string(),
                  description: z.string(),
                  currency: z.string(),
                }),
                tax: z.object({
                  value: z.string(),
                  description: z.string(),
                  currency: z.string(),
                }),
              })
            ),
          })
        ),
        description: z.string(),
        payments: z.array(
          z.object({
            payment_id: z.string(),
            status: z.string(),
            amount: z.object({ currency: z.string(), value: z.string() }),
            created_datetime: z.string(),
            payment_reference: z.string(),
            transactions: z.array(
              z.union([
                z.object({
                  transaction_id: z.string(),
                  authorization: z.object({
                    status: z.string(),
                    next_action: z.object({
                      type: z.string(),
                      parameters: z.union([
                        z.object({
                          three_ds_server_trans_id: z.string(),
                          acs_transaction_id: z.string(),
                          acs_signed_content: z.string(),
                          acs_reference_number: z.string(),
                          three_ds_server_url: z.string(),
                          three_ds_browser_fields: z.string(),
                        }),
                        z.object({}),
                      ]),
                    }),
                    expiry_datetime: z.string(),
                    auth_detailed_status: z.string(),
                    masked_number: z.string(),
                    transaction_reference: z.string(),
                  }),
                  amount: z.object({ currency: z.string(), value: z.string() }),
                  transaction_type: z.string(),
                  status: z.string(),
                  gateway_datetime: z.string(),
                  gateway_reference: z.string(),
                  transaction_reference: z.string(),
                  errors: z.array(z.object({ message: z.string() })),
                  metadata: z.object({}),
                  card_type: z.string(),
                  card: z.object({
                    card_reference: z.string(),
                    type: z.string(),
                    expiry_date: z.string(),
                    account_type: z.string(),
                    scheme: z.string(),
                    masked_pan: z.string(),
                    last_4: z.string(),
                  }),
                  settlement_date: z.string(),
                  processed: z.string(),
                  three_ds: z.object({
                    xid: z.string(),
                    provider: z.string(),
                    cavv: z.string(),
                    eci: z.string(),
                  }),
                  terminal_id: z.string(),
                  system_trace_audit_number: z.string(),
                  retrieval_reference_number: z.string(),
                  trace: z.string(),
                }),
                z.object({
                  transaction_id: z.string(),
                  authorization: z.object({
                    status: z.string(),
                    next_action: z.object({
                      type: z.string(),
                      parameters: z.union([
                        z.object({
                          three_ds_server_trans_id: z.string(),
                          acs_transaction_id: z.string(),
                          acs_signed_content: z.string(),
                          acs_reference_number: z.string(),
                          three_ds_server_url: z.string(),
                          three_ds_browser_fields: z.string(),
                        }),
                        z.object({}),
                      ]),
                    }),
                    expiry_datetime: z.string(),
                    auth_detailed_status: z.string(),
                    masked_number: z.string(),
                    transaction_reference: z.string(),
                  }),
                  amount: z.object({ currency: z.string(), value: z.string() }),
                  transaction_type: z.string(),
                  status: z.string(),
                  gateway_datetime: z.string(),
                  gateway_reference: z.string(),
                  transaction_reference: z.string(),
                  errors: z.array(z.object({ message: z.string() })),
                  metadata: z.object({}),
                  short_transaction_id: z.string(),
                  card_type: z.string(),
                  card: z.object({
                    card_reference: z.string(),
                    type: z.string(),
                    identifier: z.string(),
                    provider: z.string(),
                  }),
                  points_used: z.number(),
                  exchange_rate: z.number(),
                }),
              ])
            ),
          })
        ),
        accepted_payment_instruments: z.array(
          z.union([
            z.object({
              type: z.string(),
              configuration: z.object({
                max_points_burn: z.number(),
                min_points_burn: z.number(),
                allow_burn: z.boolean(),
                allow_earn: z.boolean(),
              }),
              name: z.string(),
              provider: z.string(),
            }),
            z.object({ type: z.string(), schemes: z.array(z.string()) }),
          ])
        ),
        user_information: z.object({
          name: z.object({ given_name: z.string(), surname: z.string() }),
          email: z.string(),
          phone: z.string(),
          address: z.object({
            street: z.string(),
            suburb: z.string(),
            state: z.string(),
            postcode: z.string(),
            country: z.string(),
          }),
          custom_user_attributes: z.object({}),
        }),
        user_information_attribute_request: z.object({
          name: z.object({ capture: z.boolean(), required: z.boolean() }),
          email: z.object({ capture: z.boolean(), required: z.boolean() }),
          phone: z.object({ capture: z.boolean(), required: z.boolean() }),
          address: z.object({ capture: z.boolean(), required: z.boolean() }),
          custom_user_attributes: z.object({}),
        }),
        wallet: z.object({
          wallet_user_id: z.string(),
          wallet_id: z.string(),
          wallet_name: z.string(),
          wallet_status: z.string(),
          wallet_aggregator_id: z.string(),
          wallet_experience_id: z.string(),
          callback_base_url: z.string(),
        }),
        non_payment_instruments: z.array(
          z.object({
            type: z.string(),
            provider: z.string(),
            name: z.string(),
            identifier: z.string(),
            metadata: z.object({}),
          })
        ),
        payment_workflow: z.string(),
        config: z.object({
          merchant_reference: z.string(),
          merchant_name: z.string(),
          location: z.string(),
          terminal_id: z.string(),
          card_acceptor_name: z.string(),
          card_acceptor_location: z.object({
            city: z.string(),
            address_line_2: z.string(),
            address_line_1: z.string(),
            state: z.string(),
            country: z.string(),
            postcode: z.string(),
          }),
        }),
        metadata: z.object({}),
        merchant: z.object({ id: z.string(), name: z.string() }),
        approval: z.object({ merchant: z.boolean(), wallet: z.boolean() }),
        force_3_ds: z.boolean(),
        restricted_item_types: z.object({
          giftcard: z.object({ present: z.boolean() }),
          loyalty: z.object({ present: z.boolean() }),
        }),
        items: z.array(
          z.object({
            amount: z.object({ currency: z.string(), value: z.string() }),
            description: z.string(),
            quantity: z.number(),
            id: z.string(),
            uri: z.string(),
            discount: z.object({
              value: z.string(),
              description: z.string(),
              currency: z.string(),
            }),
            tax: z.object({
              value: z.string(),
              description: z.string(),
              currency: z.string(),
            }),
          })
        ),
        deferred_payment_expiry_datetime: z.string(),
        expiry_datetime: z.string(),
        updated_datetime: z.string(),
        created_datetime: z.string(),
        amount: z.object({
          total: z.string(),
          currency: z.string(),
          breakdown: z.object({
            shipping: z.object({ currency: z.string(), value: z.string() }),
            handling: z.object({ currency: z.string(), value: z.string() }),
            tax_total: z.object({ currency: z.string(), value: z.string() }),
            insurance: z.object({ currency: z.string(), value: z.string() }),
            shipping_discount: z.object({
              currency: z.string(),
              value: z.string(),
            }),
            discount: z.object({ currency: z.string(), value: z.string() }),
            tax: z.object({ currency: z.string(), value: z.string() }),
          }),
        }),
        payment_context: z.string(),
        status: z.string(),
        order_reference: z.string(),
        qr: z.object({ content: z.string() }),
        order_id: z.string(),
      }),
    }),
    refund_amount: z.number(),
    cancelled_at: z.string(),
    expires_at: z.string(),
    brand_name: z.string(),
    brand_id: z.string(),
    status: z.string(),
    payee_type: z.string(),
    type: z.string(),
    payee_name: z.string(),
    payee_id: z.string(),
    amount: z.number(),
    wallet_id: z.string(),
    user_id: z.string(),
    id: z.string(),
  })
  .and(
    z.object({
      deleted_at: z.string(),
      updated_at: z.string(),
      created_at: z.string(),
    })
  );
const adminCreateLoyaltyProgramsRequest = z.object({
  name: z.string(),
  format: z.string(),
  display: z.object({
    hidden_barcode: z.boolean(),
    logo: z.string(),
    color: z.string(),
  }),
  id: z.string(),
  settings: z.object({
    live_data: z.object({
      auth: z.object({
        grant: z.string(),
        client_id: z.string(),
        code_challenge_method: z.string(),
        audience: z.string(),
        scope: z.string(),
        endpoints: z.object({ token: z.string(), authorize: z.string() }),
      }),
      card: z.object({
        endpoints: z.object({
          unlink: z.object({ url: z.string(), method: z.string() }),
          balance: z.object({ url: z.string(), method: z.string() }),
          link: z.object({ url: z.string(), method: z.string() }),
        }),
      }),
    }),
    access: z.object({
      allow_live_data: z.array(z.string()),
      allow_static_data: z.array(z.string()),
    }),
  }),
});
const adminCreateLoyaltyProgramsResponse = z
  .object({
    id: z.string(),
    name: z.string(),
    format: z.string(),
    display: z.object({
      hidden_barcode: z.boolean(),
      logo: z.string(),
      color: z.string(),
    }),
  })
  .and(
    z.object({
      timestamps: z.object({
        deleted_at: z.string(),
        updated_at: z.string(),
        created_at: z.string(),
      }),
    })
  );
const adminColesTeamMembersCardsWhitelistRequest = z.object({
  source: z.string(),
  actioned_by: z.string(),
  updates: z.array(
    z.object({ identifier: z.string(), employee_type: z.string() })
  ),
});
const adminColesTeamMembersCardsWhitelistResponse = z.object({
  count_records_actioned: z.number(),
});
const adminLoyaltyBlacklistRequest = z.object({
  source: z.string(),
  actioned_by: z.string(),
  identifier: z.string(),
});
const adminUpdateLoyaltyProgramsRequest = z.object({
  id: z.string(),
  name: z.string(),
  format: z.string(),
  display: z.object({
    hidden_barcode: z.boolean(),
    logo: z.string(),
    color: z.string(),
  }),
  settings: z.object({
    live_data: z.object({
      auth: z.object({
        grant: z.string(),
        client_id: z.string(),
        code_challenge_method: z.string(),
        audience: z.string(),
        scope: z.string(),
        endpoints: z.object({ token: z.string(), authorize: z.string() }),
      }),
      card: z.object({
        endpoints: z.object({
          unlink: z.object({ url: z.string(), method: z.string() }),
          balance: z.object({ url: z.string(), method: z.string() }),
          link: z.object({ url: z.string(), method: z.string() }),
        }),
      }),
    }),
    access: z.object({
      allow_live_data: z.array(z.string()),
      allow_static_data: z.array(z.string()),
    }),
  }),
});
const adminUpdateLoyaltyProgramsResponse = z
  .object({
    id: z.string(),
    name: z.string(),
    format: z.string(),
    display: z.object({
      hidden_barcode: z.boolean(),
      logo: z.string(),
      color: z.string(),
    }),
  })
  .and(
    z.object({
      timestamps: z.object({
        deleted_at: z.string(),
        updated_at: z.string(),
        created_at: z.string(),
      }),
    })
  );
const migratePaymentMethodRequest = z.object({
  cipher_text: z.string(),
  wallet_id: z.string(),
  deleted_at: z.string(),
  updated_at: z.string(),
  created_at: z.string(),
  nick_name: z.string(),
  holder_name: z.string(),
  address_id: z.string(),
  status: z.string(),
  external_id: z.string(),
  user_id: z.string(),
});
const migratePaymentMethodResponse = z.object({
  error: z.object({
    details: z.union([z.object({}), z.array(z.object({}))]),
    message: z.string(),
  }),
  internal_id: z.string(),
  external_id: z.string(),
});
const makePaymentMethodDefaultRequest = z.object({
  payment_method_id: z.string(),
  user_id: z.string(),
});
const makePaymentMethodDefaultResponse = z.object({
  default_receive_payment_method: z.string(),
  default_pay_payment_method: z.string(),
});
const migrateOrderRequest = z
  .object({
    details: z.object({
      order: z.object({
        discounted_items: z.array(
          z.object({
            amount: z.object({ currency: z.string(), value: z.string() }),
            description: z.string(),
            quantity: z.number(),
            id: z.string(),
            uri: z.string(),
            discount: z.object({
              value: z.string(),
              description: z.string(),
              currency: z.string(),
            }),
            tax: z.object({
              value: z.string(),
              description: z.string(),
              currency: z.string(),
            }),
          })
        ),
        returns: z.array(
          z.object({
            amount: z.number(),
            items: z.array(
              z.object({
                amount: z.object({ currency: z.string(), value: z.string() }),
                description: z.string(),
                quantity: z.number(),
                id: z.string(),
                uri: z.string(),
                discount: z.object({
                  value: z.string(),
                  description: z.string(),
                  currency: z.string(),
                }),
                tax: z.object({
                  value: z.string(),
                  description: z.string(),
                  currency: z.string(),
                }),
              })
            ),
          })
        ),
        description: z.string(),
        payments: z.array(
          z.object({
            payment_id: z.string(),
            status: z.string(),
            amount: z.object({ currency: z.string(), value: z.string() }),
            created_datetime: z.string(),
            payment_reference: z.string(),
            transactions: z.array(
              z.union([
                z.object({
                  transaction_id: z.string(),
                  authorization: z.object({
                    status: z.string(),
                    next_action: z.object({
                      type: z.string(),
                      parameters: z.union([
                        z.object({
                          three_ds_server_trans_id: z.string(),
                          acs_transaction_id: z.string(),
                          acs_signed_content: z.string(),
                          acs_reference_number: z.string(),
                          three_ds_server_url: z.string(),
                          three_ds_browser_fields: z.string(),
                        }),
                        z.object({}),
                      ]),
                    }),
                    expiry_datetime: z.string(),
                    auth_detailed_status: z.string(),
                    masked_number: z.string(),
                    transaction_reference: z.string(),
                  }),
                  amount: z.object({ currency: z.string(), value: z.string() }),
                  transaction_type: z.string(),
                  status: z.string(),
                  gateway_datetime: z.string(),
                  gateway_reference: z.string(),
                  transaction_reference: z.string(),
                  errors: z.array(z.object({ message: z.string() })),
                  metadata: z.object({}),
                  card_type: z.string(),
                  card: z.object({
                    card_reference: z.string(),
                    type: z.string(),
                    expiry_date: z.string(),
                    account_type: z.string(),
                    scheme: z.string(),
                    masked_pan: z.string(),
                    last_4: z.string(),
                  }),
                  settlement_date: z.string(),
                  processed: z.string(),
                  three_ds: z.object({
                    xid: z.string(),
                    provider: z.string(),
                    cavv: z.string(),
                    eci: z.string(),
                  }),
                  terminal_id: z.string(),
                  system_trace_audit_number: z.string(),
                  retrieval_reference_number: z.string(),
                  trace: z.string(),
                }),
                z.object({
                  transaction_id: z.string(),
                  authorization: z.object({
                    status: z.string(),
                    next_action: z.object({
                      type: z.string(),
                      parameters: z.union([
                        z.object({
                          three_ds_server_trans_id: z.string(),
                          acs_transaction_id: z.string(),
                          acs_signed_content: z.string(),
                          acs_reference_number: z.string(),
                          three_ds_server_url: z.string(),
                          three_ds_browser_fields: z.string(),
                        }),
                        z.object({}),
                      ]),
                    }),
                    expiry_datetime: z.string(),
                    auth_detailed_status: z.string(),
                    masked_number: z.string(),
                    transaction_reference: z.string(),
                  }),
                  amount: z.object({ currency: z.string(), value: z.string() }),
                  transaction_type: z.string(),
                  status: z.string(),
                  gateway_datetime: z.string(),
                  gateway_reference: z.string(),
                  transaction_reference: z.string(),
                  errors: z.array(z.object({ message: z.string() })),
                  metadata: z.object({}),
                  short_transaction_id: z.string(),
                  card_type: z.string(),
                  card: z.object({
                    card_reference: z.string(),
                    type: z.string(),
                    identifier: z.string(),
                    provider: z.string(),
                  }),
                  points_used: z.number(),
                  exchange_rate: z.number(),
                }),
              ])
            ),
          })
        ),
        accepted_payment_instruments: z.array(
          z.union([
            z.object({
              type: z.string(),
              configuration: z.object({
                max_points_burn: z.number(),
                min_points_burn: z.number(),
                allow_burn: z.boolean(),
                allow_earn: z.boolean(),
              }),
              name: z.string(),
              provider: z.string(),
            }),
            z.object({ type: z.string(), schemes: z.array(z.string()) }),
          ])
        ),
        user_information: z.object({
          name: z.object({ given_name: z.string(), surname: z.string() }),
          email: z.string(),
          phone: z.string(),
          address: z.object({
            street: z.string(),
            suburb: z.string(),
            state: z.string(),
            postcode: z.string(),
            country: z.string(),
          }),
          custom_user_attributes: z.object({}),
        }),
        user_information_attribute_request: z.object({
          name: z.object({ capture: z.boolean(), required: z.boolean() }),
          email: z.object({ capture: z.boolean(), required: z.boolean() }),
          phone: z.object({ capture: z.boolean(), required: z.boolean() }),
          address: z.object({ capture: z.boolean(), required: z.boolean() }),
          custom_user_attributes: z.object({}),
        }),
        wallet: z.object({
          wallet_user_id: z.string(),
          wallet_id: z.string(),
          wallet_name: z.string(),
          wallet_status: z.string(),
          wallet_aggregator_id: z.string(),
          wallet_experience_id: z.string(),
          callback_base_url: z.string(),
        }),
        non_payment_instruments: z.array(
          z.object({
            type: z.string(),
            provider: z.string(),
            name: z.string(),
            identifier: z.string(),
            metadata: z.object({}),
          })
        ),
        payment_workflow: z.string(),
        config: z.object({
          merchant_reference: z.string(),
          merchant_name: z.string(),
          location: z.string(),
          terminal_id: z.string(),
          card_acceptor_name: z.string(),
          card_acceptor_location: z.object({
            city: z.string(),
            address_line_2: z.string(),
            address_line_1: z.string(),
            state: z.string(),
            country: z.string(),
            postcode: z.string(),
          }),
        }),
        metadata: z.object({}),
        merchant: z.object({ id: z.string(), name: z.string() }),
        approval: z.object({ merchant: z.boolean(), wallet: z.boolean() }),
        force_3_ds: z.boolean(),
        restricted_item_types: z.object({
          giftcard: z.object({ present: z.boolean() }),
          loyalty: z.object({ present: z.boolean() }),
        }),
        items: z.array(
          z.object({
            amount: z.object({ currency: z.string(), value: z.string() }),
            description: z.string(),
            quantity: z.number(),
            id: z.string(),
            uri: z.string(),
            discount: z.object({
              value: z.string(),
              description: z.string(),
              currency: z.string(),
            }),
            tax: z.object({
              value: z.string(),
              description: z.string(),
              currency: z.string(),
            }),
          })
        ),
        deferred_payment_expiry_datetime: z.string(),
        expiry_datetime: z.string(),
        updated_datetime: z.string(),
        created_datetime: z.string(),
        amount: z.object({
          total: z.string(),
          currency: z.string(),
          breakdown: z.object({
            shipping: z.object({ currency: z.string(), value: z.string() }),
            handling: z.object({ currency: z.string(), value: z.string() }),
            tax_total: z.object({ currency: z.string(), value: z.string() }),
            insurance: z.object({ currency: z.string(), value: z.string() }),
            shipping_discount: z.object({
              currency: z.string(),
              value: z.string(),
            }),
            discount: z.object({ currency: z.string(), value: z.string() }),
            tax: z.object({ currency: z.string(), value: z.string() }),
          }),
        }),
        payment_context: z.string(),
        status: z.string(),
        order_reference: z.string(),
        qr: z.object({ content: z.string() }),
        order_id: z.string(),
      }),
    }),
    refund_amount: z.number(),
    cancelled_at: z.string(),
    expires_at: z.string(),
    brand_name: z.string(),
    brand_id: z.string(),
    status: z.string(),
    payee_type: z.string(),
    type: z.string(),
    payee_name: z.string(),
    payee_id: z.string(),
    amount: z.number(),
    wallet_id: z.string(),
    user_id: z.string(),
    id: z.string(),
  })
  .and(
    z.object({
      deleted_at: z.string(),
      updated_at: z.string(),
      created_at: z.string(),
    })
  );
const migrateOrderResponse = z.object({
  error: z.object({
    details: z.union([z.object({}), z.array(z.object({}))]),
    message: z.string(),
  }),
  internal_id: z.string(),
  external_id: z.string(),
});
const migrateLoyaltyCardRequest = z.object({
  deleted_at: z.string(),
  updated_at: z.string(),
  created_at: z.string(),
  wallet_id: z.string(),
  loyalty_scheme: z.string(),
  user_id: z.string(),
  bar_code: z.string(),
  external_id: z.string(),
});
const migrateLoyaltyCardResponse = z.object({
  error: z.object({
    details: z.union([z.object({}), z.array(z.object({}))]),
    message: z.string(),
  }),
  internal_id: z.string(),
  external_id: z.string(),
});
const listPaymentMethodsResponse = z.array(
  z.union([
    z.object({
      id: z.string(),
      alias: z.string(),
      type: z.string(),
      status: z.string(),
      data: z.object({
        visualization: z.object({
          card_image_url: z.string(),
          last_four_digits: z.string(),
        }),
        issuer_name: z.string(),
        expiry: z.object({ year: z.string(), month: z.string() }),
        type: z.string(),
        schemes: z.array(z.string()),
      }),
      timestamps: z.object({ updated_at: z.string(), created_at: z.string() }),
      is_default_receive: z.boolean(),
      is_default_pay: z.boolean(),
    }),
    z.object({
      id: z.string(),
      alias: z.string(),
      type: z.string(),
      status: z.string(),
      data: z.object({
        bar_code_format: z.string(),
        bar_code: z.string(),
        pin: z.string(),
        proxy_id: z.string(),
        refresh_token: z.string(),
        access_token: z.string(),
      }),
      timestamps: z.object({ updated_at: z.string(), created_at: z.string() }),
      is_default_receive: z.boolean(),
      is_default_pay: z.boolean(),
    }),
    z
      .object({
        id: z.string(),
        alias: z.string(),
        type: z.string(),
        status: z.string(),
        data: z.object({
          bar_code_format: z.string(),
          bar_code: z.string(),
          pin: z.string(),
        }),
        timestamps: z.object({
          updated_at: z.string(),
          created_at: z.string(),
        }),
        is_default_receive: z.boolean(),
        is_default_pay: z.boolean(),
      })
      .and(
        z
          .object({
            live_data: z.union([
              z.object({
                redemption_allowed: z.boolean(),
                card_number: z.string(),
                exchange_rate: z.number(),
                points_date: z.string(),
                points_balance: z.number(),
                last_name: z.string(),
                first_name: z.string(),
              }),
              z.object({}),
            ]),
            linked_date: z.string(),
            program: z.union([
              z.object({
                name: z.string(),
                id: z.string(),
                type: z.string(),
                display: z.object({ color: z.string(), logo: z.string() }),
                scheme: z.string(),
              }),
              z.object({
                name: z.string(),
                display: z.object({ color: z.string(), logo: z.string() }),
                type: z.string(),
              }),
            ]),
          })
          .and(
            z.object({
              validation_data: z.object({
                available_users_count: z.number(),
                max_users_allowed: z.number(),
              }),
            })
          )
      )
      .and(
        z.object({
          live: z.object({ reason: z.string(), status: z.boolean() }),
        })
      ),
  ])
);
const getPaymentMethodByIdResponse = z.union([
  z.object({
    id: z.string(),
    alias: z.string(),
    type: z.string(),
    status: z.string(),
    data: z.object({
      visualization: z.object({
        card_image_url: z.string(),
        last_four_digits: z.string(),
      }),
      issuer_name: z.string(),
      expiry: z.object({ year: z.string(), month: z.string() }),
      type: z.string(),
      schemes: z.array(z.string()),
    }),
    timestamps: z.object({ updated_at: z.string(), created_at: z.string() }),
    is_default_receive: z.boolean(),
    is_default_pay: z.boolean(),
  }),
  z.object({
    id: z.string(),
    alias: z.string(),
    type: z.string(),
    status: z.string(),
    data: z.object({
      bar_code_format: z.string(),
      bar_code: z.string(),
      pin: z.string(),
      proxy_id: z.string(),
      refresh_token: z.string(),
      access_token: z.string(),
    }),
    timestamps: z.object({ updated_at: z.string(), created_at: z.string() }),
    is_default_receive: z.boolean(),
    is_default_pay: z.boolean(),
  }),
  z
    .object({
      id: z.string(),
      alias: z.string(),
      type: z.string(),
      status: z.string(),
      data: z.object({
        bar_code_format: z.string(),
        bar_code: z.string(),
        pin: z.string(),
      }),
      timestamps: z.object({ updated_at: z.string(), created_at: z.string() }),
      is_default_receive: z.boolean(),
      is_default_pay: z.boolean(),
    })
    .and(
      z
        .object({
          live_data: z.union([
            z.object({
              redemption_allowed: z.boolean(),
              card_number: z.string(),
              exchange_rate: z.number(),
              points_date: z.string(),
              points_balance: z.number(),
              last_name: z.string(),
              first_name: z.string(),
            }),
            z.object({}),
          ]),
          linked_date: z.string(),
          program: z.union([
            z.object({
              name: z.string(),
              id: z.string(),
              type: z.string(),
              display: z.object({ color: z.string(), logo: z.string() }),
              scheme: z.string(),
            }),
            z.object({
              name: z.string(),
              display: z.object({ color: z.string(), logo: z.string() }),
              type: z.string(),
            }),
          ]),
        })
        .and(
          z.object({
            validation_data: z.object({
              available_users_count: z.number(),
              max_users_allowed: z.number(),
            }),
          })
        )
    ),
]);
const getPublicKeyResponse = z.object({
  key_id: z.string(),
  public_key: z.string(),
});
const bankCardResponse = z.object({
  id: z.string(),
  alias: z.string(),
  type: z.string(),
  status: z.string(),
  data: z.object({
    visualization: z.object({
      card_image_url: z.string(),
      last_four_digits: z.string(),
    }),
    issuer_name: z.string(),
    expiry: z.object({ year: z.string(), month: z.string() }),
    type: z.string(),
    schemes: z.array(z.string()),
  }),
  timestamps: z.object({ updated_at: z.string(), created_at: z.string() }),
  is_default_receive: z.boolean(),
  is_default_pay: z.boolean(),
});
const updateBankCardPaymentMethodRequest = z
  .object({
    alias: z.string(),
    data: z.object({
      cvv: z.string(),
      expiry: z.object({ year: z.string(), month: z.string() }),
    }),
  })
  .and(
    z.object({ is_default_pay: z.boolean(), is_default_receive: z.boolean() })
  );
const updateBankCardPaymentMethodResponse = z
  .object({
    id: z.string(),
    alias: z.string(),
    type: z.string(),
    status: z.string(),
    data: z.object({
      visualization: z.object({
        card_image_url: z.string(),
        last_four_digits: z.string(),
      }),
      issuer_name: z.string(),
      expiry: z.object({ year: z.string(), month: z.string() }),
      type: z.string(),
      schemes: z.array(z.string()),
    }),
    timestamps: z.object({ updated_at: z.string(), created_at: z.string() }),
    is_default_receive: z.boolean(),
    is_default_pay: z.boolean(),
  })
  .and(
    z.object({
      reason: z.string(),
      errors: z.array(
        z.object({
          name: z.string(),
          message: z.string(),
          stack: z.string(),
          cause: z.object({}),
        })
      ),
    })
  );
const createBankCardPaymentMethodRequest = z
  .object({
    type: z.string(),
    device: z.object({ inauth: z.object({ transaction_id: z.string() }) }),
    data: z.object({ cipher_text: z.string() }),
    alias: z.string(),
  })
  .and(
    z.object({ is_default_pay: z.boolean(), is_default_receive: z.boolean() })
  );
const createBankCardPaymentMethodResponse = z.object({
  id: z.string(),
  alias: z.string(),
  type: z.string(),
  status: z.string(),
  data: z.object({
    visualization: z.object({
      card_image_url: z.string(),
      last_four_digits: z.string(),
    }),
    issuer_name: z.string(),
    expiry: z.object({ year: z.string(), month: z.string() }),
    type: z.string(),
    schemes: z.array(z.string()),
  }),
  timestamps: z.object({ updated_at: z.string(), created_at: z.string() }),
  is_default_receive: z.boolean(),
  is_default_pay: z.boolean(),
});
const createLoyaltyCardRequest = z.object({
  program: z.union([
    z.object({ id: z.string(), type: z.string() }),
    z.object({
      name: z.string(),
      display: z.object({ color: z.string(), logo: z.string() }),
      type: z.string(),
    }),
  ]),
  data: z.object({
    bar_code_format: z.string(),
    bar_code: z.string(),
    pin: z.string(),
  }),
  is_default: z.boolean(),
});
const createLoyaltyCardResponse = z
  .object({
    id: z.string(),
    alias: z.string(),
    type: z.string(),
    status: z.string(),
    data: z.object({
      bar_code_format: z.string(),
      bar_code: z.string(),
      pin: z.string(),
    }),
    timestamps: z.object({ updated_at: z.string(), created_at: z.string() }),
    is_default_receive: z.boolean(),
    is_default_pay: z.boolean(),
  })
  .and(
    z
      .object({
        live_data: z.union([
          z.object({
            redemption_allowed: z.boolean(),
            card_number: z.string(),
            exchange_rate: z.number(),
            points_date: z.string(),
            points_balance: z.number(),
            last_name: z.string(),
            first_name: z.string(),
          }),
          z.object({}),
        ]),
        linked_date: z.string(),
        program: z.union([
          z.object({
            name: z.string(),
            id: z.string(),
            type: z.string(),
            display: z.object({ color: z.string(), logo: z.string() }),
            scheme: z.string(),
          }),
          z.object({
            name: z.string(),
            display: z.object({ color: z.string(), logo: z.string() }),
            type: z.string(),
          }),
        ]),
      })
      .and(
        z.object({
          validation_data: z.object({
            available_users_count: z.number(),
            max_users_allowed: z.number(),
          }),
        })
      )
  );
const listLoyaltyCardsResponse = z.array(
  z
    .object({
      id: z.string(),
      alias: z.string(),
      type: z.string(),
      status: z.string(),
      data: z.object({
        bar_code_format: z.string(),
        bar_code: z.string(),
        pin: z.string(),
      }),
      timestamps: z.object({ updated_at: z.string(), created_at: z.string() }),
      is_default_receive: z.boolean(),
      is_default_pay: z.boolean(),
    })
    .and(
      z
        .object({
          live_data: z.union([
            z.object({
              redemption_allowed: z.boolean(),
              card_number: z.string(),
              exchange_rate: z.number(),
              points_date: z.string(),
              points_balance: z.number(),
              last_name: z.string(),
              first_name: z.string(),
            }),
            z.object({}),
          ]),
          linked_date: z.string(),
          program: z.union([
            z.object({
              name: z.string(),
              id: z.string(),
              type: z.string(),
              display: z.object({ color: z.string(), logo: z.string() }),
              scheme: z.string(),
            }),
            z.object({
              name: z.string(),
              display: z.object({ color: z.string(), logo: z.string() }),
              type: z.string(),
            }),
          ]),
        })
        .and(
          z.object({
            validation_data: z.object({
              available_users_count: z.number(),
              max_users_allowed: z.number(),
            }),
          })
        )
    )
    .and(
      z.object({ live: z.object({ reason: z.string(), status: z.boolean() }) })
    )
);
const loyaltyCardWithLiveData = z
  .object({
    id: z.string(),
    alias: z.string(),
    type: z.string(),
    status: z.string(),
    data: z.object({
      bar_code_format: z.string(),
      bar_code: z.string(),
      pin: z.string(),
    }),
    timestamps: z.object({ updated_at: z.string(), created_at: z.string() }),
    is_default_receive: z.boolean(),
    is_default_pay: z.boolean(),
  })
  .and(
    z
      .object({
        live_data: z.union([
          z.object({
            redemption_allowed: z.boolean(),
            card_number: z.string(),
            exchange_rate: z.number(),
            points_date: z.string(),
            points_balance: z.number(),
            last_name: z.string(),
            first_name: z.string(),
          }),
          z.object({}),
        ]),
        linked_date: z.string(),
        program: z.union([
          z.object({
            name: z.string(),
            id: z.string(),
            type: z.string(),
            display: z.object({ color: z.string(), logo: z.string() }),
            scheme: z.string(),
          }),
          z.object({
            name: z.string(),
            display: z.object({ color: z.string(), logo: z.string() }),
            type: z.string(),
          }),
        ]),
      })
      .and(
        z.object({
          validation_data: z.object({
            available_users_count: z.number(),
            max_users_allowed: z.number(),
          }),
        })
      )
  )
  .and(
    z.object({ live: z.object({ reason: z.string(), status: z.boolean() }) })
  );
const updateLoyaltyCardRequest = z.object({
  program: z.object({
    name: z.string(),
    display: z.object({ color: z.string(), logo: z.string() }),
    type: z.string(),
  }),
  data: z.object({
    pin: z.string(),
    bar_code_format: z.string(),
    bar_code: z.string(),
  }),
  is_default: z.boolean(),
});
const updateLoyaltyCardResponse = z
  .object({
    id: z.string(),
    alias: z.string(),
    type: z.string(),
    status: z.string(),
    data: z.object({
      bar_code_format: z.string(),
      bar_code: z.string(),
      pin: z.string(),
    }),
    timestamps: z.object({ updated_at: z.string(), created_at: z.string() }),
    is_default_receive: z.boolean(),
    is_default_pay: z.boolean(),
  })
  .and(
    z
      .object({
        live_data: z.union([
          z.object({
            redemption_allowed: z.boolean(),
            card_number: z.string(),
            exchange_rate: z.number(),
            points_date: z.string(),
            points_balance: z.number(),
            last_name: z.string(),
            first_name: z.string(),
          }),
          z.object({}),
        ]),
        linked_date: z.string(),
        program: z.union([
          z.object({
            name: z.string(),
            id: z.string(),
            type: z.string(),
            display: z.object({ color: z.string(), logo: z.string() }),
            scheme: z.string(),
          }),
          z.object({
            name: z.string(),
            display: z.object({ color: z.string(), logo: z.string() }),
            type: z.string(),
          }),
        ]),
      })
      .and(
        z.object({
          validation_data: z.object({
            available_users_count: z.number(),
            max_users_allowed: z.number(),
          }),
        })
      )
  );
const listLoyaltyProgramsResponse = z.array(
  z.object({
    id: z.string(),
    name: z.string(),
    format: z.string(),
    display: z.object({
      hidden_barcode: z.boolean(),
      logo: z.string(),
      color: z.string(),
    }),
  })
);
const loyaltyProgram = z.object({
  id: z.string(),
  name: z.string(),
  format: z.string(),
  display: z.object({
    hidden_barcode: z.boolean(),
    logo: z.string(),
    color: z.string(),
  }),
});
const initiateFlybuysLinkResponse = z.object({
  auth: z.object({
    grant: z.string(),
    client_id: z.string(),
    code_challenge_method: z.string(),
    audience: z.string(),
    scope: z.string(),
    endpoints: z.object({ token: z.string(), authorize: z.string() }),
  }),
  next_step: z.string(),
});
const completeFlybuysLinkRequest = z.object({
  refresh_token: z.string(),
  access_token: z.string(),
});
const completeFlybuysLinkResponse = z
  .union([
    z.object({
      redemption_allowed: z.boolean(),
      card_number: z.string(),
      exchange_rate: z.number(),
      points_date: z.string(),
      points_balance: z.number(),
      last_name: z.string(),
      first_name: z.string(),
    }),
    z.object({}),
  ])
  .and(
    z.object({
      proxy_id: z.string(),
      masked_member_no: z.string(),
      link_date: z.string(),
      account_id: z.string(),
    })
  );
const flybuysUnlinkRequest = z.object({ access_token: z.string() });
const updateLoyaltyCredentialsRequest = z.object({
  refresh_token: z.string(),
  access_token: z.string(),
});
const qrGetOrderResponse = z.object({
  next_step: z.string(),
  returns: z.array(
    z.object({
      transactions: z.array(
        z.union([
          z.object({
            acquirer_id: z.string(),
            settlement_date: z.string(),
            cavv: z.string(),
            xid: z.string(),
            retrieval_reference_number: z.string(),
            transaction_response_code: z.string(),
            processed: z.string(),
            card: z.object({
              masked_pan: z.string(),
              expiry: z.string(),
              unique_id: z.string(),
              account_type: z.string(),
              scheme: z.string(),
              last_4: z.string(),
            }),
            terminal_id: z.string(),
            merchant_id: z.string(),
            system_trace_audit_number: z.string(),
            reference: z.string(),
            amount: z.any(),
            payment_method_type: z.string(),
            status: z.string(),
          }),
          z.object({
            card: z.object({ unique_id: z.string(), last_4: z.string() }),
            points_spent: z.number(),
            reference: z.string(),
            amount: z.any(),
            payment_method_type: z.string(),
          }),
          z.object({
            card: z.object({ unique_id: z.string(), last_4: z.string() }),
            reference: z.string(),
            amount: z.any(),
            payment_method_type: z.string(),
          }),
        ])
      ),
      items: z.array(
        z.object({
          amount: z.object({ currency: z.string(), value: z.string() }),
          description: z.string(),
          quantity: z.number(),
          id: z.string(),
          uri: z.string(),
          discount: z.object({
            value: z.string(),
            description: z.string(),
            currency: z.string(),
          }),
          tax: z.object({
            value: z.string(),
            description: z.string(),
            currency: z.string(),
          }),
        })
      ),
      refund_id: z.string(),
      amount: z.any(),
    })
  ),
  payment: z.object({
    payment_id: z.string(),
    transactions: z.array(
      z.union([
        z.object({
          acquirer_id: z.string(),
          settlement_date: z.string(),
          cavv: z.string(),
          xid: z.string(),
          retrieval_reference_number: z.string(),
          transaction_response_code: z.string(),
          processed: z.string(),
          card: z.object({
            masked_pan: z.string(),
            expiry: z.string(),
            unique_id: z.string(),
            account_type: z.string(),
            scheme: z.string(),
            last_4: z.string(),
          }),
          terminal_id: z.string(),
          merchant_id: z.string(),
          system_trace_audit_number: z.string(),
          reference: z.string(),
          amount: z.any(),
          payment_method_type: z.string(),
          status: z.string(),
        }),
        z.object({
          card: z.object({ unique_id: z.string(), last_4: z.string() }),
          points_spent: z.number(),
          reference: z.string(),
          amount: z.any(),
          payment_method_type: z.string(),
        }),
        z.object({
          card: z.object({ unique_id: z.string(), last_4: z.string() }),
          reference: z.string(),
          amount: z.any(),
          payment_method_type: z.string(),
        }),
      ])
    ),
    created: z.string(),
    amount: z.any(),
    status: z.string(),
  }),
  order: z.object({
    qr: z.object({ display: z.string(), code: z.string() }),
    merchant: z.object({
      name: z.string(),
      abn: z.string(),
      id: z.string(),
      store: z.object({
        id: z.string(),
        location: z.string(),
        name: z.string(),
      }),
      brand: z.object({ name: z.string() }),
    }),
    reference: z.string(),
    status: z.string(),
    amount: z.any(),
    currency: z.string(),
    created: z.string(),
    updated: z.string(),
    cancelled: z.string(),
    expires: z.string(),
    items: z.array(
      z.object({
        amount: z.object({ currency: z.string(), value: z.string() }),
        description: z.string(),
        quantity: z.number(),
        id: z.string(),
        uri: z.string(),
        discount: z.object({
          value: z.string(),
          description: z.string(),
          currency: z.string(),
        }),
        tax: z.object({
          value: z.string(),
          description: z.string(),
          currency: z.string(),
        }),
      })
    ),
    transaction_accept_method: z.object({
      card_accept_type: z.string(),
      card_accept_method: z.string(),
      cardholder_accept_method: z.string(),
    }),
    merchant_transaction_reference_id: z.string(),
    is_payable: z.boolean(),
    forced_3ds: z.boolean(),
    user: z.object({
      user_information: z.object({
        name: z.string(),
        phone: z.string(),
        email: z.string(),
        shipping_address: z.object({
          street: z.string(),
          state: z.string(),
          suburb: z.string(),
          postcode: z.string(),
          country: z.string(),
        }),
      }),
      id: z.string(),
    }),
  }),
});
const qrInitResponse = z.object({
  next_step: z.string(),
  gift_cards: z.array(
    z.object({
      id: z.string(),
      alias: z.string(),
      type: z.string(),
      status: z.string(),
      data: z.object({
        bar_code_format: z.string(),
        bar_code: z.string(),
        pin: z.string(),
        proxy_id: z.string(),
        refresh_token: z.string(),
        access_token: z.string(),
      }),
      timestamps: z.object({ updated_at: z.string(), created_at: z.string() }),
      is_default_receive: z.boolean(),
      is_default_pay: z.boolean(),
    })
  ),
  loyalty: z.object({ number: z.string(), name: z.string() }),
  accepted_payment_instruments: z.array(z.string()),
  additional_payment_options: z.array(
    z.object({ display_name: z.string(), type: z.string(), name: z.string() })
  ),
  saved_user_information: z.object({
    id: z.string(),
    handle: z.string(),
    email: z.string(),
    mobile_number: z.string(),
    first_name: z.string(),
    middle_name: z.string(),
    last_name: z.string(),
    birth_date: z.string(),
    avatar_url: z.string(),
    display_name: z.string(),
    can_receive_payment: z.boolean(),
    mobile_verified_at: z.string(),
    email_verified_at: z.string(),
    wallets: z.array(
      z.object({
        metadata: z.object({ migrated_at: z.string() }),
        status_change_feedback: z.string(),
        status_change_reason: z.string(),
        registration_client_id: z.string(),
        deleted_at: z.string(),
        restricted_at: z.string(),
        flag_marketing_consent_at: z.string(),
        latest_login_at: z.string(),
        wallet_id: z.string(),
        first_login_at: z.string(),
        registered_at: z.string(),
        user_id: z.string(),
      })
    ),
    is_blocked: z.boolean(),
    created_at: z.string(),
    deleted_at: z.string(),
    shipping_address: z.object({ id: z.string() }).and(
      z
        .union([
          z.object({
            suburb: z.string(),
            state: z.string(),
            postcode: z.string(),
            user_id: z.string(),
            company_name: z.string(),
            recipient_name: z.string(),
            country_code: z.string(),
            phone: z.string(),
            email: z.string(),
            delivery_instruction: z.string(),
            nickname: z.string(),
            address_line_2: z.string(),
            address_line_1: z.string(),
          }),
          z.object({
            suburb: z.string(),
            state: z.string(),
            postcode: z.string(),
            user_id: z.string(),
            company_name: z.string(),
            recipient_name: z.string(),
            country_code: z.string(),
            phone: z.string(),
            email: z.string(),
            delivery_instruction: z.string(),
            nickname: z.string(),
            unit_and_level_address: z.string(),
            street_address: z.string(),
          }),
        ])
        .and(
          z.object({
            timestamps: z.object({
              deleted_at: z.string(),
              updated_at: z.string(),
              created_at: z.string(),
            }),
          })
        )
    ),
    billing_address: z.object({ id: z.string() }).and(
      z
        .union([
          z.object({
            suburb: z.string(),
            state: z.string(),
            postcode: z.string(),
            user_id: z.string(),
            company_name: z.string(),
            recipient_name: z.string(),
            country_code: z.string(),
            phone: z.string(),
            email: z.string(),
            delivery_instruction: z.string(),
            nickname: z.string(),
            address_line_2: z.string(),
            address_line_1: z.string(),
          }),
          z.object({
            suburb: z.string(),
            state: z.string(),
            postcode: z.string(),
            user_id: z.string(),
            company_name: z.string(),
            recipient_name: z.string(),
            country_code: z.string(),
            phone: z.string(),
            email: z.string(),
            delivery_instruction: z.string(),
            nickname: z.string(),
            unit_and_level_address: z.string(),
            street_address: z.string(),
          }),
        ])
        .and(
          z.object({
            timestamps: z.object({
              deleted_at: z.string(),
              updated_at: z.string(),
              created_at: z.string(),
            }),
          })
        )
    ),
  }),
  user_information_request: z.array(
    z.object({ mandatory: z.boolean(), attribute: z.string() })
  ),
  order: z.object({
    qr: z.object({ display: z.string(), code: z.string() }),
    merchant: z.object({
      name: z.string(),
      abn: z.string(),
      id: z.string(),
      store: z.object({
        id: z.string(),
        location: z.string(),
        name: z.string(),
      }),
      brand: z.object({ name: z.string() }),
    }),
    reference: z.string(),
    status: z.string(),
    amount: z.any(),
    currency: z.string(),
    created: z.string(),
    updated: z.string(),
    cancelled: z.string(),
    expires: z.string(),
    items: z.array(
      z.object({
        amount: z.object({ currency: z.string(), value: z.string() }),
        description: z.string(),
        quantity: z.number(),
        id: z.string(),
        uri: z.string(),
        discount: z.object({
          value: z.string(),
          description: z.string(),
          currency: z.string(),
        }),
        tax: z.object({
          value: z.string(),
          description: z.string(),
          currency: z.string(),
        }),
      })
    ),
    transaction_accept_method: z.object({
      card_accept_type: z.string(),
      card_accept_method: z.string(),
      cardholder_accept_method: z.string(),
    }),
    merchant_transaction_reference_id: z.string(),
    is_payable: z.boolean(),
    forced_3ds: z.boolean(),
    user: z.object({
      user_information: z.object({
        name: z.string(),
        phone: z.string(),
        email: z.string(),
        shipping_address: z.object({
          street: z.string(),
          state: z.string(),
          suburb: z.string(),
          postcode: z.string(),
          country: z.string(),
        }),
      }),
      id: z.string(),
    }),
  }),
});
const qrAcknowledgeRequest = z.object({
  gift_cards: z.array(
    z.object({
      id: z.string(),
      alias: z.string(),
      type: z.string(),
      status: z.string(),
      data: z.object({
        bar_code_format: z.string(),
        bar_code: z.string(),
        pin: z.string(),
        proxy_id: z.string(),
        refresh_token: z.string(),
        access_token: z.string(),
      }),
      timestamps: z.object({ updated_at: z.string(), created_at: z.string() }),
      is_default_receive: z.boolean(),
      is_default_pay: z.boolean(),
    })
  ),
  loyalty: z.object({ number: z.string(), name: z.string() }),
  user_information: z.object({
    name: z.string(),
    phone: z.string(),
    email: z.string(),
    shipping_address: z.object({
      street: z.string(),
      state: z.string(),
      suburb: z.string(),
      postcode: z.string(),
      country: z.string(),
    }),
  }),
});
const qrAcknowledgeResponse = z.object({
  next_step: z.string(),
  gift_cards: z.array(
    z.object({
      id: z.string(),
      alias: z.string(),
      type: z.string(),
      status: z.string(),
      data: z.object({
        bar_code_format: z.string(),
        bar_code: z.string(),
        pin: z.string(),
        proxy_id: z.string(),
        refresh_token: z.string(),
        access_token: z.string(),
      }),
      timestamps: z.object({ updated_at: z.string(), created_at: z.string() }),
      is_default_receive: z.boolean(),
      is_default_pay: z.boolean(),
    })
  ),
  loyalty: z.object({ number: z.string(), name: z.string() }),
  order: z.object({
    qr: z.object({ display: z.string(), code: z.string() }),
    merchant: z.object({
      name: z.string(),
      abn: z.string(),
      id: z.string(),
      store: z.object({
        id: z.string(),
        location: z.string(),
        name: z.string(),
      }),
      brand: z.object({ name: z.string() }),
    }),
    reference: z.string(),
    status: z.string(),
    amount: z.any(),
    currency: z.string(),
    created: z.string(),
    updated: z.string(),
    cancelled: z.string(),
    expires: z.string(),
    items: z.array(
      z.object({
        amount: z.object({ currency: z.string(), value: z.string() }),
        description: z.string(),
        quantity: z.number(),
        id: z.string(),
        uri: z.string(),
        discount: z.object({
          value: z.string(),
          description: z.string(),
          currency: z.string(),
        }),
        tax: z.object({
          value: z.string(),
          description: z.string(),
          currency: z.string(),
        }),
      })
    ),
    transaction_accept_method: z.object({
      card_accept_type: z.string(),
      card_accept_method: z.string(),
      cardholder_accept_method: z.string(),
    }),
    merchant_transaction_reference_id: z.string(),
    is_payable: z.boolean(),
    forced_3ds: z.boolean(),
    user: z.object({
      user_information: z.object({
        name: z.string(),
        phone: z.string(),
        email: z.string(),
        shipping_address: z.object({
          street: z.string(),
          state: z.string(),
          suburb: z.string(),
          postcode: z.string(),
          country: z.string(),
        }),
      }),
      id: z.string(),
    }),
  }),
});
const qrAuthorizeRequest = z.object({
  "3ds2sdk_device_values": z.object({}),
  authorize_transaction_requests: z.array(
    z.object({
      amount: z.any(),
      card: z.object({ payment_method_id: z.string() }),
    })
  ),
});
const qrAuthorizeResponse = z.object({
  authorizations: z.array(
    z.object({
      expires: z.string(),
      updated: z.string(),
      created: z.string(),
      cavv: z.string(),
      xid: z.string(),
      masked_pan: z.string(),
      last_4: z.string(),
      next_action: z.object({
        "3ds2_auth_data": z.object({
          expires: z.string(),
          updated: z.string(),
          created: z.string(),
          parameters: z.object({
            ACSReferenceNumber: z.string(),
            ACSSignedContent: z.string(),
            ACSTransactionID: z.string(),
            ThreeDSServerTransID: z.string(),
          }),
          cavv: z.string(),
          xid: z.string(),
        }),
        type: z.string(),
      }),
      failure_reason: z.string(),
      status: z.string(),
      unique_id: z.string(),
      amount: z.any(),
    })
  ),
  payment_id: z.string(),
  next_step: z.string(),
  order: z.object({
    qr: z.object({ display: z.string(), code: z.string() }),
    merchant: z.object({
      name: z.string(),
      abn: z.string(),
      id: z.string(),
      store: z.object({
        id: z.string(),
        location: z.string(),
        name: z.string(),
      }),
      brand: z.object({ name: z.string() }),
    }),
    reference: z.string(),
    status: z.string(),
    amount: z.any(),
    currency: z.string(),
    created: z.string(),
    updated: z.string(),
    cancelled: z.string(),
    expires: z.string(),
    items: z.array(
      z.object({
        amount: z.object({ currency: z.string(), value: z.string() }),
        description: z.string(),
        quantity: z.number(),
        id: z.string(),
        uri: z.string(),
        discount: z.object({
          value: z.string(),
          description: z.string(),
          currency: z.string(),
        }),
        tax: z.object({
          value: z.string(),
          description: z.string(),
          currency: z.string(),
        }),
      })
    ),
    transaction_accept_method: z.object({
      card_accept_type: z.string(),
      card_accept_method: z.string(),
      cardholder_accept_method: z.string(),
    }),
    merchant_transaction_reference_id: z.string(),
    is_payable: z.boolean(),
    forced_3ds: z.boolean(),
    user: z.object({
      user_information: z.object({
        name: z.string(),
        phone: z.string(),
        email: z.string(),
        shipping_address: z.object({
          street: z.string(),
          state: z.string(),
          suburb: z.string(),
          postcode: z.string(),
          country: z.string(),
        }),
      }),
      id: z.string(),
    }),
  }),
});
const qrFinalizeRequest = z.object({
  payment_id: z.string(),
  cards: z.array(
    z.object({
      amount: z.any(),
      card: z.object({
        "3ds2_result": z.object({ last_cres: z.string() }),
        authorization_code: z.string(),
        payment_method_id: z.string(),
      }),
    })
  ),
});
const qrFinalizeResponse = z.object({
  order: z.object({
    qr: z.object({ display: z.string(), code: z.string() }),
    merchant: z.object({
      name: z.string(),
      abn: z.string(),
      id: z.string(),
      store: z.object({
        id: z.string(),
        location: z.string(),
        name: z.string(),
      }),
      brand: z.object({ name: z.string() }),
    }),
    reference: z.string(),
    status: z.string(),
    amount: z.any(),
    currency: z.string(),
    created: z.string(),
    updated: z.string(),
    cancelled: z.string(),
    expires: z.string(),
    items: z.array(
      z.object({
        amount: z.object({ currency: z.string(), value: z.string() }),
        description: z.string(),
        quantity: z.number(),
        id: z.string(),
        uri: z.string(),
        discount: z.object({
          value: z.string(),
          description: z.string(),
          currency: z.string(),
        }),
        tax: z.object({
          value: z.string(),
          description: z.string(),
          currency: z.string(),
        }),
      })
    ),
    transaction_accept_method: z.object({
      card_accept_type: z.string(),
      card_accept_method: z.string(),
      cardholder_accept_method: z.string(),
    }),
    merchant_transaction_reference_id: z.string(),
    is_payable: z.boolean(),
    forced_3ds: z.boolean(),
    user: z.object({
      user_information: z.object({
        name: z.string(),
        phone: z.string(),
        email: z.string(),
        shipping_address: z.object({
          street: z.string(),
          state: z.string(),
          suburb: z.string(),
          postcode: z.string(),
          country: z.string(),
        }),
      }),
      id: z.string(),
    }),
  }),
  loyalty_points: z.object({
    points_earned: z.number(),
    card: z.object({ name: z.string(), number: z.string() }),
  }),
  payment: z.object({
    payment_id: z.string(),
    transactions: z.array(
      z.union([
        z.object({
          acquirer_id: z.string(),
          settlement_date: z.string(),
          cavv: z.string(),
          xid: z.string(),
          retrieval_reference_number: z.string(),
          transaction_response_code: z.string(),
          processed: z.string(),
          card: z.object({
            masked_pan: z.string(),
            expiry: z.string(),
            unique_id: z.string(),
            account_type: z.string(),
            scheme: z.string(),
            last_4: z.string(),
          }),
          terminal_id: z.string(),
          merchant_id: z.string(),
          system_trace_audit_number: z.string(),
          reference: z.string(),
          amount: z.any(),
          payment_method_type: z.string(),
          status: z.string(),
        }),
        z.object({
          card: z.object({ unique_id: z.string(), last_4: z.string() }),
          points_spent: z.number(),
          reference: z.string(),
          amount: z.any(),
          payment_method_type: z.string(),
        }),
        z.object({
          card: z.object({ unique_id: z.string(), last_4: z.string() }),
          reference: z.string(),
          amount: z.any(),
          payment_method_type: z.string(),
        }),
      ])
    ),
    created: z.string(),
    amount: z.any(),
    status: z.string(),
  }),
});
const abortOrderResponse = z.object({
  qr: z.object({ display: z.string(), code: z.string() }),
  merchant: z.object({
    name: z.string(),
    abn: z.string(),
    id: z.string(),
    store: z.object({ id: z.string(), location: z.string(), name: z.string() }),
    brand: z.object({ name: z.string() }),
  }),
  reference: z.string(),
  status: z.string(),
  amount: z.any(),
  currency: z.string(),
  created: z.string(),
  updated: z.string(),
  cancelled: z.string(),
  expires: z.string(),
  items: z.array(
    z.object({
      amount: z.object({ currency: z.string(), value: z.string() }),
      description: z.string(),
      quantity: z.number(),
      id: z.string(),
      uri: z.string(),
      discount: z.object({
        value: z.string(),
        description: z.string(),
        currency: z.string(),
      }),
      tax: z.object({
        value: z.string(),
        description: z.string(),
        currency: z.string(),
      }),
    })
  ),
  transaction_accept_method: z.object({
    card_accept_type: z.string(),
    card_accept_method: z.string(),
    cardholder_accept_method: z.string(),
  }),
  merchant_transaction_reference_id: z.string(),
  is_payable: z.boolean(),
  forced_3ds: z.boolean(),
  user: z.object({
    user_information: z.object({
      name: z.string(),
      phone: z.string(),
      email: z.string(),
      shipping_address: z.object({
        street: z.string(),
        state: z.string(),
        suburb: z.string(),
        postcode: z.string(),
        country: z.string(),
      }),
    }),
    id: z.string(),
  }),
});
const qrRefundCallbackRequest = z.object({
  loyalty_deducted: z.object({
    points_deducted: z.number(),
    card: z.object({ name: z.string(), number: z.string() }),
  }),
  new_payment_methods: z.array(
    z.object({
      name: z.string(),
      number: z.string(),
      code: z.string(),
      value: z.number(),
    })
  ),
  transactions: z.array(
    z.object({
      acquirer_id: z.string(),
      settlement_date: z.string(),
      cavv: z.string(),
      xid: z.string(),
      retrieval_reference_number: z.string(),
      transaction_response_code: z.string(),
      processed: z.string(),
      card: z.object({
        masked_pan: z.string(),
        expiry: z.string(),
        unique_id: z.string(),
        account_type: z.string(),
        scheme: z.string(),
        last_4: z.string(),
      }),
      terminal_id: z.string(),
      merchant_id: z.string(),
      system_trace_audit_number: z.string(),
      reference: z.string(),
      amount: z.any(),
      payment_method_type: z.string(),
      status: z.string(),
    })
  ),
  items: z.array(
    z.object({
      amount: z.object({ currency: z.string(), value: z.string() }),
      description: z.string(),
      quantity: z.number(),
      id: z.string(),
      uri: z.string(),
      discount: z.object({
        value: z.string(),
        description: z.string(),
        currency: z.string(),
      }),
      tax: z.object({
        value: z.string(),
        description: z.string(),
        currency: z.string(),
      }),
    })
  ),
  order_reference: z.string(),
  amount: z.number(),
  refund_id: z.string(),
});
const responsesQrV2OrderSummaryResponse = z.object({
  order: z.object({
    discounted_items: z.array(
      z.object({
        amount: z.object({ currency: z.string(), value: z.string() }),
        description: z.string(),
        quantity: z.number(),
        id: z.string(),
        uri: z.string(),
        discount: z.object({
          value: z.string(),
          description: z.string(),
          currency: z.string(),
        }),
        tax: z.object({
          value: z.string(),
          description: z.string(),
          currency: z.string(),
        }),
      })
    ),
    returns: z.array(
      z.object({
        amount: z.number(),
        items: z.array(
          z.object({
            amount: z.object({ currency: z.string(), value: z.string() }),
            description: z.string(),
            quantity: z.number(),
            id: z.string(),
            uri: z.string(),
            discount: z.object({
              value: z.string(),
              description: z.string(),
              currency: z.string(),
            }),
            tax: z.object({
              value: z.string(),
              description: z.string(),
              currency: z.string(),
            }),
          })
        ),
      })
    ),
    description: z.string(),
    payments: z.array(
      z.object({
        payment_id: z.string(),
        status: z.string(),
        amount: z.object({ currency: z.string(), value: z.string() }),
        created_datetime: z.string(),
        payment_reference: z.string(),
        transactions: z.array(
          z.union([
            z.object({
              transaction_id: z.string(),
              authorization: z.object({
                status: z.string(),
                next_action: z.object({
                  type: z.string(),
                  parameters: z.union([
                    z.object({
                      three_ds_server_trans_id: z.string(),
                      acs_transaction_id: z.string(),
                      acs_signed_content: z.string(),
                      acs_reference_number: z.string(),
                      three_ds_server_url: z.string(),
                      three_ds_browser_fields: z.string(),
                    }),
                    z.object({}),
                  ]),
                }),
                expiry_datetime: z.string(),
                auth_detailed_status: z.string(),
                masked_number: z.string(),
                transaction_reference: z.string(),
              }),
              amount: z.object({ currency: z.string(), value: z.string() }),
              transaction_type: z.string(),
              status: z.string(),
              gateway_datetime: z.string(),
              gateway_reference: z.string(),
              transaction_reference: z.string(),
              errors: z.array(z.object({ message: z.string() })),
              metadata: z.object({}),
              card_type: z.string(),
              card: z.object({
                card_reference: z.string(),
                type: z.string(),
                expiry_date: z.string(),
                account_type: z.string(),
                scheme: z.string(),
                masked_pan: z.string(),
                last_4: z.string(),
              }),
              settlement_date: z.string(),
              processed: z.string(),
              three_ds: z.object({
                xid: z.string(),
                provider: z.string(),
                cavv: z.string(),
                eci: z.string(),
              }),
              terminal_id: z.string(),
              system_trace_audit_number: z.string(),
              retrieval_reference_number: z.string(),
              trace: z.string(),
            }),
            z.object({
              transaction_id: z.string(),
              authorization: z.object({
                status: z.string(),
                next_action: z.object({
                  type: z.string(),
                  parameters: z.union([
                    z.object({
                      three_ds_server_trans_id: z.string(),
                      acs_transaction_id: z.string(),
                      acs_signed_content: z.string(),
                      acs_reference_number: z.string(),
                      three_ds_server_url: z.string(),
                      three_ds_browser_fields: z.string(),
                    }),
                    z.object({}),
                  ]),
                }),
                expiry_datetime: z.string(),
                auth_detailed_status: z.string(),
                masked_number: z.string(),
                transaction_reference: z.string(),
              }),
              amount: z.object({ currency: z.string(), value: z.string() }),
              transaction_type: z.string(),
              status: z.string(),
              gateway_datetime: z.string(),
              gateway_reference: z.string(),
              transaction_reference: z.string(),
              errors: z.array(z.object({ message: z.string() })),
              metadata: z.object({}),
              short_transaction_id: z.string(),
              card_type: z.string(),
              card: z.object({
                card_reference: z.string(),
                type: z.string(),
                identifier: z.string(),
                provider: z.string(),
              }),
              points_used: z.number(),
              exchange_rate: z.number(),
            }),
          ])
        ),
      })
    ),
    accepted_payment_instruments: z.array(
      z.union([
        z.object({
          type: z.string(),
          configuration: z.object({
            max_points_burn: z.number(),
            min_points_burn: z.number(),
            allow_burn: z.boolean(),
            allow_earn: z.boolean(),
          }),
          name: z.string(),
          provider: z.string(),
        }),
        z.object({ type: z.string(), schemes: z.array(z.string()) }),
      ])
    ),
    user_information: z.object({
      name: z.object({ given_name: z.string(), surname: z.string() }),
      email: z.string(),
      phone: z.string(),
      address: z.object({
        street: z.string(),
        suburb: z.string(),
        state: z.string(),
        postcode: z.string(),
        country: z.string(),
      }),
      custom_user_attributes: z.object({}),
    }),
    user_information_attribute_request: z.object({
      name: z.object({ capture: z.boolean(), required: z.boolean() }),
      email: z.object({ capture: z.boolean(), required: z.boolean() }),
      phone: z.object({ capture: z.boolean(), required: z.boolean() }),
      address: z.object({ capture: z.boolean(), required: z.boolean() }),
      custom_user_attributes: z.object({}),
    }),
    wallet: z.object({
      wallet_user_id: z.string(),
      wallet_id: z.string(),
      wallet_name: z.string(),
      wallet_status: z.string(),
      wallet_aggregator_id: z.string(),
      wallet_experience_id: z.string(),
      callback_base_url: z.string(),
    }),
    non_payment_instruments: z.array(
      z.object({
        type: z.string(),
        provider: z.string(),
        name: z.string(),
        identifier: z.string(),
        metadata: z.object({}),
      })
    ),
    payment_workflow: z.string(),
    config: z.object({
      merchant_reference: z.string(),
      merchant_name: z.string(),
      location: z.string(),
      terminal_id: z.string(),
      card_acceptor_name: z.string(),
      card_acceptor_location: z.object({
        city: z.string(),
        address_line_2: z.string(),
        address_line_1: z.string(),
        state: z.string(),
        country: z.string(),
        postcode: z.string(),
      }),
    }),
    metadata: z.object({}),
    merchant: z.object({ id: z.string(), name: z.string() }),
    approval: z.object({ merchant: z.boolean(), wallet: z.boolean() }),
    force_3_ds: z.boolean(),
    restricted_item_types: z.object({
      giftcard: z.object({ present: z.boolean() }),
      loyalty: z.object({ present: z.boolean() }),
    }),
    items: z.array(
      z.object({
        amount: z.object({ currency: z.string(), value: z.string() }),
        description: z.string(),
        quantity: z.number(),
        id: z.string(),
        uri: z.string(),
        discount: z.object({
          value: z.string(),
          description: z.string(),
          currency: z.string(),
        }),
        tax: z.object({
          value: z.string(),
          description: z.string(),
          currency: z.string(),
        }),
      })
    ),
    deferred_payment_expiry_datetime: z.string(),
    expiry_datetime: z.string(),
    updated_datetime: z.string(),
    created_datetime: z.string(),
    amount: z.object({
      total: z.string(),
      currency: z.string(),
      breakdown: z.object({
        shipping: z.object({ currency: z.string(), value: z.string() }),
        handling: z.object({ currency: z.string(), value: z.string() }),
        tax_total: z.object({ currency: z.string(), value: z.string() }),
        insurance: z.object({ currency: z.string(), value: z.string() }),
        shipping_discount: z.object({
          currency: z.string(),
          value: z.string(),
        }),
        discount: z.object({ currency: z.string(), value: z.string() }),
        tax: z.object({ currency: z.string(), value: z.string() }),
      }),
    }),
    payment_context: z.string(),
    status: z.string(),
    order_reference: z.string(),
    qr: z.object({ content: z.string() }),
    order_id: z.string(),
  }),
  next_step: z.string(),
});
const requestsQrV2ClaimOrderRequest = z.object({
  non_payment_instruments: z.array(
    z.object({ type: z.string(), payment_method_id: z.string() })
  ),
  wallet_experience_id: z.string(),
});
const responsesQrV2ClaimOrderResponse = z.object({
  order: z.object({
    discounted_items: z.array(
      z.object({
        amount: z.object({ currency: z.string(), value: z.string() }),
        description: z.string(),
        quantity: z.number(),
        id: z.string(),
        uri: z.string(),
        discount: z.object({
          value: z.string(),
          description: z.string(),
          currency: z.string(),
        }),
        tax: z.object({
          value: z.string(),
          description: z.string(),
          currency: z.string(),
        }),
      })
    ),
    returns: z.array(
      z.object({
        amount: z.number(),
        items: z.array(
          z.object({
            amount: z.object({ currency: z.string(), value: z.string() }),
            description: z.string(),
            quantity: z.number(),
            id: z.string(),
            uri: z.string(),
            discount: z.object({
              value: z.string(),
              description: z.string(),
              currency: z.string(),
            }),
            tax: z.object({
              value: z.string(),
              description: z.string(),
              currency: z.string(),
            }),
          })
        ),
      })
    ),
    description: z.string(),
    payments: z.array(
      z.object({
        payment_id: z.string(),
        status: z.string(),
        amount: z.object({ currency: z.string(), value: z.string() }),
        created_datetime: z.string(),
        payment_reference: z.string(),
        transactions: z.array(
          z.union([
            z.object({
              transaction_id: z.string(),
              authorization: z.object({
                status: z.string(),
                next_action: z.object({
                  type: z.string(),
                  parameters: z.union([
                    z.object({
                      three_ds_server_trans_id: z.string(),
                      acs_transaction_id: z.string(),
                      acs_signed_content: z.string(),
                      acs_reference_number: z.string(),
                      three_ds_server_url: z.string(),
                      three_ds_browser_fields: z.string(),
                    }),
                    z.object({}),
                  ]),
                }),
                expiry_datetime: z.string(),
                auth_detailed_status: z.string(),
                masked_number: z.string(),
                transaction_reference: z.string(),
              }),
              amount: z.object({ currency: z.string(), value: z.string() }),
              transaction_type: z.string(),
              status: z.string(),
              gateway_datetime: z.string(),
              gateway_reference: z.string(),
              transaction_reference: z.string(),
              errors: z.array(z.object({ message: z.string() })),
              metadata: z.object({}),
              card_type: z.string(),
              card: z.object({
                card_reference: z.string(),
                type: z.string(),
                expiry_date: z.string(),
                account_type: z.string(),
                scheme: z.string(),
                masked_pan: z.string(),
                last_4: z.string(),
              }),
              settlement_date: z.string(),
              processed: z.string(),
              three_ds: z.object({
                xid: z.string(),
                provider: z.string(),
                cavv: z.string(),
                eci: z.string(),
              }),
              terminal_id: z.string(),
              system_trace_audit_number: z.string(),
              retrieval_reference_number: z.string(),
              trace: z.string(),
            }),
            z.object({
              transaction_id: z.string(),
              authorization: z.object({
                status: z.string(),
                next_action: z.object({
                  type: z.string(),
                  parameters: z.union([
                    z.object({
                      three_ds_server_trans_id: z.string(),
                      acs_transaction_id: z.string(),
                      acs_signed_content: z.string(),
                      acs_reference_number: z.string(),
                      three_ds_server_url: z.string(),
                      three_ds_browser_fields: z.string(),
                    }),
                    z.object({}),
                  ]),
                }),
                expiry_datetime: z.string(),
                auth_detailed_status: z.string(),
                masked_number: z.string(),
                transaction_reference: z.string(),
              }),
              amount: z.object({ currency: z.string(), value: z.string() }),
              transaction_type: z.string(),
              status: z.string(),
              gateway_datetime: z.string(),
              gateway_reference: z.string(),
              transaction_reference: z.string(),
              errors: z.array(z.object({ message: z.string() })),
              metadata: z.object({}),
              short_transaction_id: z.string(),
              card_type: z.string(),
              card: z.object({
                card_reference: z.string(),
                type: z.string(),
                identifier: z.string(),
                provider: z.string(),
              }),
              points_used: z.number(),
              exchange_rate: z.number(),
            }),
          ])
        ),
      })
    ),
    accepted_payment_instruments: z.array(
      z.union([
        z.object({
          type: z.string(),
          configuration: z.object({
            max_points_burn: z.number(),
            min_points_burn: z.number(),
            allow_burn: z.boolean(),
            allow_earn: z.boolean(),
          }),
          name: z.string(),
          provider: z.string(),
        }),
        z.object({ type: z.string(), schemes: z.array(z.string()) }),
      ])
    ),
    user_information: z.object({
      name: z.object({ given_name: z.string(), surname: z.string() }),
      email: z.string(),
      phone: z.string(),
      address: z.object({
        street: z.string(),
        suburb: z.string(),
        state: z.string(),
        postcode: z.string(),
        country: z.string(),
      }),
      custom_user_attributes: z.object({}),
    }),
    user_information_attribute_request: z.object({
      name: z.object({ capture: z.boolean(), required: z.boolean() }),
      email: z.object({ capture: z.boolean(), required: z.boolean() }),
      phone: z.object({ capture: z.boolean(), required: z.boolean() }),
      address: z.object({ capture: z.boolean(), required: z.boolean() }),
      custom_user_attributes: z.object({}),
    }),
    wallet: z.object({
      wallet_user_id: z.string(),
      wallet_id: z.string(),
      wallet_name: z.string(),
      wallet_status: z.string(),
      wallet_aggregator_id: z.string(),
      wallet_experience_id: z.string(),
      callback_base_url: z.string(),
    }),
    non_payment_instruments: z.array(
      z.object({
        type: z.string(),
        provider: z.string(),
        name: z.string(),
        identifier: z.string(),
        metadata: z.object({}),
      })
    ),
    payment_workflow: z.string(),
    config: z.object({
      merchant_reference: z.string(),
      merchant_name: z.string(),
      location: z.string(),
      terminal_id: z.string(),
      card_acceptor_name: z.string(),
      card_acceptor_location: z.object({
        city: z.string(),
        address_line_2: z.string(),
        address_line_1: z.string(),
        state: z.string(),
        country: z.string(),
        postcode: z.string(),
      }),
    }),
    metadata: z.object({}),
    merchant: z.object({ id: z.string(), name: z.string() }),
    approval: z.object({ merchant: z.boolean(), wallet: z.boolean() }),
    force_3_ds: z.boolean(),
    restricted_item_types: z.object({
      giftcard: z.object({ present: z.boolean() }),
      loyalty: z.object({ present: z.boolean() }),
    }),
    items: z.array(
      z.object({
        amount: z.object({ currency: z.string(), value: z.string() }),
        description: z.string(),
        quantity: z.number(),
        id: z.string(),
        uri: z.string(),
        discount: z.object({
          value: z.string(),
          description: z.string(),
          currency: z.string(),
        }),
        tax: z.object({
          value: z.string(),
          description: z.string(),
          currency: z.string(),
        }),
      })
    ),
    deferred_payment_expiry_datetime: z.string(),
    expiry_datetime: z.string(),
    updated_datetime: z.string(),
    created_datetime: z.string(),
    amount: z.object({
      total: z.string(),
      currency: z.string(),
      breakdown: z.object({
        shipping: z.object({ currency: z.string(), value: z.string() }),
        handling: z.object({ currency: z.string(), value: z.string() }),
        tax_total: z.object({ currency: z.string(), value: z.string() }),
        insurance: z.object({ currency: z.string(), value: z.string() }),
        shipping_discount: z.object({
          currency: z.string(),
          value: z.string(),
        }),
        discount: z.object({ currency: z.string(), value: z.string() }),
        tax: z.object({ currency: z.string(), value: z.string() }),
      }),
    }),
    payment_context: z.string(),
    status: z.string(),
    order_reference: z.string(),
    qr: z.object({ content: z.string() }),
    order_id: z.string(),
  }),
  next_step: z.string(),
});
const requestsQrV2UpdateOrderRequest = z.object({
  user_information: z.object({
    name: z.object({ given_name: z.string(), surname: z.string() }),
    email: z.string(),
    phone: z.string(),
    address: z.object({
      street: z.string(),
      suburb: z.string(),
      state: z.string(),
      postcode: z.string(),
      country: z.string(),
    }),
    custom_user_attributes: z.object({}),
  }),
  non_payment_instruments: z.array(
    z.object({ type: z.string(), payment_method_id: z.string() })
  ),
  wallet_experience_id: z.string(),
});
const responsesQrV2UpdateOrderResponse = z.object({
  order: z.object({
    discounted_items: z.array(
      z.object({
        amount: z.object({ currency: z.string(), value: z.string() }),
        description: z.string(),
        quantity: z.number(),
        id: z.string(),
        uri: z.string(),
        discount: z.object({
          value: z.string(),
          description: z.string(),
          currency: z.string(),
        }),
        tax: z.object({
          value: z.string(),
          description: z.string(),
          currency: z.string(),
        }),
      })
    ),
    returns: z.array(
      z.object({
        amount: z.number(),
        items: z.array(
          z.object({
            amount: z.object({ currency: z.string(), value: z.string() }),
            description: z.string(),
            quantity: z.number(),
            id: z.string(),
            uri: z.string(),
            discount: z.object({
              value: z.string(),
              description: z.string(),
              currency: z.string(),
            }),
            tax: z.object({
              value: z.string(),
              description: z.string(),
              currency: z.string(),
            }),
          })
        ),
      })
    ),
    description: z.string(),
    payments: z.array(
      z.object({
        payment_id: z.string(),
        status: z.string(),
        amount: z.object({ currency: z.string(), value: z.string() }),
        created_datetime: z.string(),
        payment_reference: z.string(),
        transactions: z.array(
          z.union([
            z.object({
              transaction_id: z.string(),
              authorization: z.object({
                status: z.string(),
                next_action: z.object({
                  type: z.string(),
                  parameters: z.union([
                    z.object({
                      three_ds_server_trans_id: z.string(),
                      acs_transaction_id: z.string(),
                      acs_signed_content: z.string(),
                      acs_reference_number: z.string(),
                      three_ds_server_url: z.string(),
                      three_ds_browser_fields: z.string(),
                    }),
                    z.object({}),
                  ]),
                }),
                expiry_datetime: z.string(),
                auth_detailed_status: z.string(),
                masked_number: z.string(),
                transaction_reference: z.string(),
              }),
              amount: z.object({ currency: z.string(), value: z.string() }),
              transaction_type: z.string(),
              status: z.string(),
              gateway_datetime: z.string(),
              gateway_reference: z.string(),
              transaction_reference: z.string(),
              errors: z.array(z.object({ message: z.string() })),
              metadata: z.object({}),
              card_type: z.string(),
              card: z.object({
                card_reference: z.string(),
                type: z.string(),
                expiry_date: z.string(),
                account_type: z.string(),
                scheme: z.string(),
                masked_pan: z.string(),
                last_4: z.string(),
              }),
              settlement_date: z.string(),
              processed: z.string(),
              three_ds: z.object({
                xid: z.string(),
                provider: z.string(),
                cavv: z.string(),
                eci: z.string(),
              }),
              terminal_id: z.string(),
              system_trace_audit_number: z.string(),
              retrieval_reference_number: z.string(),
              trace: z.string(),
            }),
            z.object({
              transaction_id: z.string(),
              authorization: z.object({
                status: z.string(),
                next_action: z.object({
                  type: z.string(),
                  parameters: z.union([
                    z.object({
                      three_ds_server_trans_id: z.string(),
                      acs_transaction_id: z.string(),
                      acs_signed_content: z.string(),
                      acs_reference_number: z.string(),
                      three_ds_server_url: z.string(),
                      three_ds_browser_fields: z.string(),
                    }),
                    z.object({}),
                  ]),
                }),
                expiry_datetime: z.string(),
                auth_detailed_status: z.string(),
                masked_number: z.string(),
                transaction_reference: z.string(),
              }),
              amount: z.object({ currency: z.string(), value: z.string() }),
              transaction_type: z.string(),
              status: z.string(),
              gateway_datetime: z.string(),
              gateway_reference: z.string(),
              transaction_reference: z.string(),
              errors: z.array(z.object({ message: z.string() })),
              metadata: z.object({}),
              short_transaction_id: z.string(),
              card_type: z.string(),
              card: z.object({
                card_reference: z.string(),
                type: z.string(),
                identifier: z.string(),
                provider: z.string(),
              }),
              points_used: z.number(),
              exchange_rate: z.number(),
            }),
          ])
        ),
      })
    ),
    accepted_payment_instruments: z.array(
      z.union([
        z.object({
          type: z.string(),
          configuration: z.object({
            max_points_burn: z.number(),
            min_points_burn: z.number(),
            allow_burn: z.boolean(),
            allow_earn: z.boolean(),
          }),
          name: z.string(),
          provider: z.string(),
        }),
        z.object({ type: z.string(), schemes: z.array(z.string()) }),
      ])
    ),
    user_information: z.object({
      name: z.object({ given_name: z.string(), surname: z.string() }),
      email: z.string(),
      phone: z.string(),
      address: z.object({
        street: z.string(),
        suburb: z.string(),
        state: z.string(),
        postcode: z.string(),
        country: z.string(),
      }),
      custom_user_attributes: z.object({}),
    }),
    user_information_attribute_request: z.object({
      name: z.object({ capture: z.boolean(), required: z.boolean() }),
      email: z.object({ capture: z.boolean(), required: z.boolean() }),
      phone: z.object({ capture: z.boolean(), required: z.boolean() }),
      address: z.object({ capture: z.boolean(), required: z.boolean() }),
      custom_user_attributes: z.object({}),
    }),
    wallet: z.object({
      wallet_user_id: z.string(),
      wallet_id: z.string(),
      wallet_name: z.string(),
      wallet_status: z.string(),
      wallet_aggregator_id: z.string(),
      wallet_experience_id: z.string(),
      callback_base_url: z.string(),
    }),
    non_payment_instruments: z.array(
      z.object({
        type: z.string(),
        provider: z.string(),
        name: z.string(),
        identifier: z.string(),
        metadata: z.object({}),
      })
    ),
    payment_workflow: z.string(),
    config: z.object({
      merchant_reference: z.string(),
      merchant_name: z.string(),
      location: z.string(),
      terminal_id: z.string(),
      card_acceptor_name: z.string(),
      card_acceptor_location: z.object({
        city: z.string(),
        address_line_2: z.string(),
        address_line_1: z.string(),
        state: z.string(),
        country: z.string(),
        postcode: z.string(),
      }),
    }),
    metadata: z.object({}),
    merchant: z.object({ id: z.string(), name: z.string() }),
    approval: z.object({ merchant: z.boolean(), wallet: z.boolean() }),
    force_3_ds: z.boolean(),
    restricted_item_types: z.object({
      giftcard: z.object({ present: z.boolean() }),
      loyalty: z.object({ present: z.boolean() }),
    }),
    items: z.array(
      z.object({
        amount: z.object({ currency: z.string(), value: z.string() }),
        description: z.string(),
        quantity: z.number(),
        id: z.string(),
        uri: z.string(),
        discount: z.object({
          value: z.string(),
          description: z.string(),
          currency: z.string(),
        }),
        tax: z.object({
          value: z.string(),
          description: z.string(),
          currency: z.string(),
        }),
      })
    ),
    deferred_payment_expiry_datetime: z.string(),
    expiry_datetime: z.string(),
    updated_datetime: z.string(),
    created_datetime: z.string(),
    amount: z.object({
      total: z.string(),
      currency: z.string(),
      breakdown: z.object({
        shipping: z.object({ currency: z.string(), value: z.string() }),
        handling: z.object({ currency: z.string(), value: z.string() }),
        tax_total: z.object({ currency: z.string(), value: z.string() }),
        insurance: z.object({ currency: z.string(), value: z.string() }),
        shipping_discount: z.object({
          currency: z.string(),
          value: z.string(),
        }),
        discount: z.object({ currency: z.string(), value: z.string() }),
        tax: z.object({ currency: z.string(), value: z.string() }),
      }),
    }),
    payment_context: z.string(),
    status: z.string(),
    order_reference: z.string(),
    qr: z.object({ content: z.string() }),
    order_id: z.string(),
  }),
  next_step: z.string(),
});
const requestsQrV2AuthorizeOrderRequest = z.object({
  three_d_s: z.union([
    z.object({
      sdk_trans_id: z.string(),
      sdk_reference_number: z.string(),
      sdk_app_id: z.string(),
      sdk_enc_data: z.string(),
      sdk_max_timeout: z.string(),
      device_render_options_if: z.string(),
      device_render_options_ui: z.string(),
      sdk_ephem_pub_key: z.string(),
      device_channel: z.string(),
    }),
    z.object({
      device_channel: z.string(),
      ok_url: z.string(),
      fail_url: z.string(),
    }),
  ]),
  transaction_requests: z.array(
    z.object({
      instrument: z.union([
        z.object({
          type: z.string(),
          account_type: z.string(),
          force_3_d_s: z.boolean(),
          payment_method_id: z.string(),
        }),
        z.object({ type: z.string(), payment_method_id: z.string() }),
      ]),
      transaction_reference: z.string(),
      amount: z.object({ currency: z.string(), value: z.string() }),
    })
  ),
});
const responsesQrV2AuthorizeResponse = z.object({
  order: z.object({
    discounted_items: z.array(
      z.object({
        amount: z.object({ currency: z.string(), value: z.string() }),
        description: z.string(),
        quantity: z.number(),
        id: z.string(),
        uri: z.string(),
        discount: z.object({
          value: z.string(),
          description: z.string(),
          currency: z.string(),
        }),
        tax: z.object({
          value: z.string(),
          description: z.string(),
          currency: z.string(),
        }),
      })
    ),
    returns: z.array(
      z.object({
        amount: z.number(),
        items: z.array(
          z.object({
            amount: z.object({ currency: z.string(), value: z.string() }),
            description: z.string(),
            quantity: z.number(),
            id: z.string(),
            uri: z.string(),
            discount: z.object({
              value: z.string(),
              description: z.string(),
              currency: z.string(),
            }),
            tax: z.object({
              value: z.string(),
              description: z.string(),
              currency: z.string(),
            }),
          })
        ),
      })
    ),
    description: z.string(),
    payments: z.array(
      z.object({
        payment_id: z.string(),
        status: z.string(),
        amount: z.object({ currency: z.string(), value: z.string() }),
        created_datetime: z.string(),
        payment_reference: z.string(),
        transactions: z.array(
          z.union([
            z.object({
              transaction_id: z.string(),
              authorization: z.object({
                status: z.string(),
                next_action: z.object({
                  type: z.string(),
                  parameters: z.union([
                    z.object({
                      three_ds_server_trans_id: z.string(),
                      acs_transaction_id: z.string(),
                      acs_signed_content: z.string(),
                      acs_reference_number: z.string(),
                      three_ds_server_url: z.string(),
                      three_ds_browser_fields: z.string(),
                    }),
                    z.object({}),
                  ]),
                }),
                expiry_datetime: z.string(),
                auth_detailed_status: z.string(),
                masked_number: z.string(),
                transaction_reference: z.string(),
              }),
              amount: z.object({ currency: z.string(), value: z.string() }),
              transaction_type: z.string(),
              status: z.string(),
              gateway_datetime: z.string(),
              gateway_reference: z.string(),
              transaction_reference: z.string(),
              errors: z.array(z.object({ message: z.string() })),
              metadata: z.object({}),
              card_type: z.string(),
              card: z.object({
                card_reference: z.string(),
                type: z.string(),
                expiry_date: z.string(),
                account_type: z.string(),
                scheme: z.string(),
                masked_pan: z.string(),
                last_4: z.string(),
              }),
              settlement_date: z.string(),
              processed: z.string(),
              three_ds: z.object({
                xid: z.string(),
                provider: z.string(),
                cavv: z.string(),
                eci: z.string(),
              }),
              terminal_id: z.string(),
              system_trace_audit_number: z.string(),
              retrieval_reference_number: z.string(),
              trace: z.string(),
            }),
            z.object({
              transaction_id: z.string(),
              authorization: z.object({
                status: z.string(),
                next_action: z.object({
                  type: z.string(),
                  parameters: z.union([
                    z.object({
                      three_ds_server_trans_id: z.string(),
                      acs_transaction_id: z.string(),
                      acs_signed_content: z.string(),
                      acs_reference_number: z.string(),
                      three_ds_server_url: z.string(),
                      three_ds_browser_fields: z.string(),
                    }),
                    z.object({}),
                  ]),
                }),
                expiry_datetime: z.string(),
                auth_detailed_status: z.string(),
                masked_number: z.string(),
                transaction_reference: z.string(),
              }),
              amount: z.object({ currency: z.string(), value: z.string() }),
              transaction_type: z.string(),
              status: z.string(),
              gateway_datetime: z.string(),
              gateway_reference: z.string(),
              transaction_reference: z.string(),
              errors: z.array(z.object({ message: z.string() })),
              metadata: z.object({}),
              short_transaction_id: z.string(),
              card_type: z.string(),
              card: z.object({
                card_reference: z.string(),
                type: z.string(),
                identifier: z.string(),
                provider: z.string(),
              }),
              points_used: z.number(),
              exchange_rate: z.number(),
            }),
          ])
        ),
      })
    ),
    accepted_payment_instruments: z.array(
      z.union([
        z.object({
          type: z.string(),
          configuration: z.object({
            max_points_burn: z.number(),
            min_points_burn: z.number(),
            allow_burn: z.boolean(),
            allow_earn: z.boolean(),
          }),
          name: z.string(),
          provider: z.string(),
        }),
        z.object({ type: z.string(), schemes: z.array(z.string()) }),
      ])
    ),
    user_information: z.object({
      name: z.object({ given_name: z.string(), surname: z.string() }),
      email: z.string(),
      phone: z.string(),
      address: z.object({
        street: z.string(),
        suburb: z.string(),
        state: z.string(),
        postcode: z.string(),
        country: z.string(),
      }),
      custom_user_attributes: z.object({}),
    }),
    user_information_attribute_request: z.object({
      name: z.object({ capture: z.boolean(), required: z.boolean() }),
      email: z.object({ capture: z.boolean(), required: z.boolean() }),
      phone: z.object({ capture: z.boolean(), required: z.boolean() }),
      address: z.object({ capture: z.boolean(), required: z.boolean() }),
      custom_user_attributes: z.object({}),
    }),
    wallet: z.object({
      wallet_user_id: z.string(),
      wallet_id: z.string(),
      wallet_name: z.string(),
      wallet_status: z.string(),
      wallet_aggregator_id: z.string(),
      wallet_experience_id: z.string(),
      callback_base_url: z.string(),
    }),
    non_payment_instruments: z.array(
      z.object({
        type: z.string(),
        provider: z.string(),
        name: z.string(),
        identifier: z.string(),
        metadata: z.object({}),
      })
    ),
    payment_workflow: z.string(),
    config: z.object({
      merchant_reference: z.string(),
      merchant_name: z.string(),
      location: z.string(),
      terminal_id: z.string(),
      card_acceptor_name: z.string(),
      card_acceptor_location: z.object({
        city: z.string(),
        address_line_2: z.string(),
        address_line_1: z.string(),
        state: z.string(),
        country: z.string(),
        postcode: z.string(),
      }),
    }),
    metadata: z.object({}),
    merchant: z.object({ id: z.string(), name: z.string() }),
    approval: z.object({ merchant: z.boolean(), wallet: z.boolean() }),
    force_3_ds: z.boolean(),
    restricted_item_types: z.object({
      giftcard: z.object({ present: z.boolean() }),
      loyalty: z.object({ present: z.boolean() }),
    }),
    items: z.array(
      z.object({
        amount: z.object({ currency: z.string(), value: z.string() }),
        description: z.string(),
        quantity: z.number(),
        id: z.string(),
        uri: z.string(),
        discount: z.object({
          value: z.string(),
          description: z.string(),
          currency: z.string(),
        }),
        tax: z.object({
          value: z.string(),
          description: z.string(),
          currency: z.string(),
        }),
      })
    ),
    deferred_payment_expiry_datetime: z.string(),
    expiry_datetime: z.string(),
    updated_datetime: z.string(),
    created_datetime: z.string(),
    amount: z.object({
      total: z.string(),
      currency: z.string(),
      breakdown: z.object({
        shipping: z.object({ currency: z.string(), value: z.string() }),
        handling: z.object({ currency: z.string(), value: z.string() }),
        tax_total: z.object({ currency: z.string(), value: z.string() }),
        insurance: z.object({ currency: z.string(), value: z.string() }),
        shipping_discount: z.object({
          currency: z.string(),
          value: z.string(),
        }),
        discount: z.object({ currency: z.string(), value: z.string() }),
        tax: z.object({ currency: z.string(), value: z.string() }),
      }),
    }),
    payment_context: z.string(),
    status: z.string(),
    order_reference: z.string(),
    qr: z.object({ content: z.string() }),
    order_id: z.string(),
  }),
  next_step: z.string(),
});
const requestsQrV2FinalizeOrderRequest = z.object({
  three_d_s_result: z.array(
    z.object({ card_reference: z.string(), lastcres: z.string() })
  ),
});
const responsesQrV2FinalizeResponse = z.object({
  order: z.object({
    discounted_items: z.array(
      z.object({
        amount: z.object({ currency: z.string(), value: z.string() }),
        description: z.string(),
        quantity: z.number(),
        id: z.string(),
        uri: z.string(),
        discount: z.object({
          value: z.string(),
          description: z.string(),
          currency: z.string(),
        }),
        tax: z.object({
          value: z.string(),
          description: z.string(),
          currency: z.string(),
        }),
      })
    ),
    returns: z.array(
      z.object({
        amount: z.number(),
        items: z.array(
          z.object({
            amount: z.object({ currency: z.string(), value: z.string() }),
            description: z.string(),
            quantity: z.number(),
            id: z.string(),
            uri: z.string(),
            discount: z.object({
              value: z.string(),
              description: z.string(),
              currency: z.string(),
            }),
            tax: z.object({
              value: z.string(),
              description: z.string(),
              currency: z.string(),
            }),
          })
        ),
      })
    ),
    description: z.string(),
    payments: z.array(
      z.object({
        payment_id: z.string(),
        status: z.string(),
        amount: z.object({ currency: z.string(), value: z.string() }),
        created_datetime: z.string(),
        payment_reference: z.string(),
        transactions: z.array(
          z.union([
            z.object({
              transaction_id: z.string(),
              authorization: z.object({
                status: z.string(),
                next_action: z.object({
                  type: z.string(),
                  parameters: z.union([
                    z.object({
                      three_ds_server_trans_id: z.string(),
                      acs_transaction_id: z.string(),
                      acs_signed_content: z.string(),
                      acs_reference_number: z.string(),
                      three_ds_server_url: z.string(),
                      three_ds_browser_fields: z.string(),
                    }),
                    z.object({}),
                  ]),
                }),
                expiry_datetime: z.string(),
                auth_detailed_status: z.string(),
                masked_number: z.string(),
                transaction_reference: z.string(),
              }),
              amount: z.object({ currency: z.string(), value: z.string() }),
              transaction_type: z.string(),
              status: z.string(),
              gateway_datetime: z.string(),
              gateway_reference: z.string(),
              transaction_reference: z.string(),
              errors: z.array(z.object({ message: z.string() })),
              metadata: z.object({}),
              card_type: z.string(),
              card: z.object({
                card_reference: z.string(),
                type: z.string(),
                expiry_date: z.string(),
                account_type: z.string(),
                scheme: z.string(),
                masked_pan: z.string(),
                last_4: z.string(),
              }),
              settlement_date: z.string(),
              processed: z.string(),
              three_ds: z.object({
                xid: z.string(),
                provider: z.string(),
                cavv: z.string(),
                eci: z.string(),
              }),
              terminal_id: z.string(),
              system_trace_audit_number: z.string(),
              retrieval_reference_number: z.string(),
              trace: z.string(),
            }),
            z.object({
              transaction_id: z.string(),
              authorization: z.object({
                status: z.string(),
                next_action: z.object({
                  type: z.string(),
                  parameters: z.union([
                    z.object({
                      three_ds_server_trans_id: z.string(),
                      acs_transaction_id: z.string(),
                      acs_signed_content: z.string(),
                      acs_reference_number: z.string(),
                      three_ds_server_url: z.string(),
                      three_ds_browser_fields: z.string(),
                    }),
                    z.object({}),
                  ]),
                }),
                expiry_datetime: z.string(),
                auth_detailed_status: z.string(),
                masked_number: z.string(),
                transaction_reference: z.string(),
              }),
              amount: z.object({ currency: z.string(), value: z.string() }),
              transaction_type: z.string(),
              status: z.string(),
              gateway_datetime: z.string(),
              gateway_reference: z.string(),
              transaction_reference: z.string(),
              errors: z.array(z.object({ message: z.string() })),
              metadata: z.object({}),
              short_transaction_id: z.string(),
              card_type: z.string(),
              card: z.object({
                card_reference: z.string(),
                type: z.string(),
                identifier: z.string(),
                provider: z.string(),
              }),
              points_used: z.number(),
              exchange_rate: z.number(),
            }),
          ])
        ),
      })
    ),
    accepted_payment_instruments: z.array(
      z.union([
        z.object({
          type: z.string(),
          configuration: z.object({
            max_points_burn: z.number(),
            min_points_burn: z.number(),
            allow_burn: z.boolean(),
            allow_earn: z.boolean(),
          }),
          name: z.string(),
          provider: z.string(),
        }),
        z.object({ type: z.string(), schemes: z.array(z.string()) }),
      ])
    ),
    user_information: z.object({
      name: z.object({ given_name: z.string(), surname: z.string() }),
      email: z.string(),
      phone: z.string(),
      address: z.object({
        street: z.string(),
        suburb: z.string(),
        state: z.string(),
        postcode: z.string(),
        country: z.string(),
      }),
      custom_user_attributes: z.object({}),
    }),
    user_information_attribute_request: z.object({
      name: z.object({ capture: z.boolean(), required: z.boolean() }),
      email: z.object({ capture: z.boolean(), required: z.boolean() }),
      phone: z.object({ capture: z.boolean(), required: z.boolean() }),
      address: z.object({ capture: z.boolean(), required: z.boolean() }),
      custom_user_attributes: z.object({}),
    }),
    wallet: z.object({
      wallet_user_id: z.string(),
      wallet_id: z.string(),
      wallet_name: z.string(),
      wallet_status: z.string(),
      wallet_aggregator_id: z.string(),
      wallet_experience_id: z.string(),
      callback_base_url: z.string(),
    }),
    non_payment_instruments: z.array(
      z.object({
        type: z.string(),
        provider: z.string(),
        name: z.string(),
        identifier: z.string(),
        metadata: z.object({}),
      })
    ),
    payment_workflow: z.string(),
    config: z.object({
      merchant_reference: z.string(),
      merchant_name: z.string(),
      location: z.string(),
      terminal_id: z.string(),
      card_acceptor_name: z.string(),
      card_acceptor_location: z.object({
        city: z.string(),
        address_line_2: z.string(),
        address_line_1: z.string(),
        state: z.string(),
        country: z.string(),
        postcode: z.string(),
      }),
    }),
    metadata: z.object({}),
    merchant: z.object({ id: z.string(), name: z.string() }),
    approval: z.object({ merchant: z.boolean(), wallet: z.boolean() }),
    force_3_ds: z.boolean(),
    restricted_item_types: z.object({
      giftcard: z.object({ present: z.boolean() }),
      loyalty: z.object({ present: z.boolean() }),
    }),
    items: z.array(
      z.object({
        amount: z.object({ currency: z.string(), value: z.string() }),
        description: z.string(),
        quantity: z.number(),
        id: z.string(),
        uri: z.string(),
        discount: z.object({
          value: z.string(),
          description: z.string(),
          currency: z.string(),
        }),
        tax: z.object({
          value: z.string(),
          description: z.string(),
          currency: z.string(),
        }),
      })
    ),
    deferred_payment_expiry_datetime: z.string(),
    expiry_datetime: z.string(),
    updated_datetime: z.string(),
    created_datetime: z.string(),
    amount: z.object({
      total: z.string(),
      currency: z.string(),
      breakdown: z.object({
        shipping: z.object({ currency: z.string(), value: z.string() }),
        handling: z.object({ currency: z.string(), value: z.string() }),
        tax_total: z.object({ currency: z.string(), value: z.string() }),
        insurance: z.object({ currency: z.string(), value: z.string() }),
        shipping_discount: z.object({
          currency: z.string(),
          value: z.string(),
        }),
        discount: z.object({ currency: z.string(), value: z.string() }),
        tax: z.object({ currency: z.string(), value: z.string() }),
      }),
    }),
    payment_context: z.string(),
    status: z.string(),
    order_reference: z.string(),
    qr: z.object({ content: z.string() }),
    order_id: z.string(),
  }),
  next_step: z.string(),
});
const responsesQrV2AbortOrderResponse = z.object({
  order: z.object({
    discounted_items: z.array(
      z.object({
        amount: z.object({ currency: z.string(), value: z.string() }),
        description: z.string(),
        quantity: z.number(),
        id: z.string(),
        uri: z.string(),
        discount: z.object({
          value: z.string(),
          description: z.string(),
          currency: z.string(),
        }),
        tax: z.object({
          value: z.string(),
          description: z.string(),
          currency: z.string(),
        }),
      })
    ),
    returns: z.array(
      z.object({
        amount: z.number(),
        items: z.array(
          z.object({
            amount: z.object({ currency: z.string(), value: z.string() }),
            description: z.string(),
            quantity: z.number(),
            id: z.string(),
            uri: z.string(),
            discount: z.object({
              value: z.string(),
              description: z.string(),
              currency: z.string(),
            }),
            tax: z.object({
              value: z.string(),
              description: z.string(),
              currency: z.string(),
            }),
          })
        ),
      })
    ),
    description: z.string(),
    payments: z.array(
      z.object({
        payment_id: z.string(),
        status: z.string(),
        amount: z.object({ currency: z.string(), value: z.string() }),
        created_datetime: z.string(),
        payment_reference: z.string(),
        transactions: z.array(
          z.union([
            z.object({
              transaction_id: z.string(),
              authorization: z.object({
                status: z.string(),
                next_action: z.object({
                  type: z.string(),
                  parameters: z.union([
                    z.object({
                      three_ds_server_trans_id: z.string(),
                      acs_transaction_id: z.string(),
                      acs_signed_content: z.string(),
                      acs_reference_number: z.string(),
                      three_ds_server_url: z.string(),
                      three_ds_browser_fields: z.string(),
                    }),
                    z.object({}),
                  ]),
                }),
                expiry_datetime: z.string(),
                auth_detailed_status: z.string(),
                masked_number: z.string(),
                transaction_reference: z.string(),
              }),
              amount: z.object({ currency: z.string(), value: z.string() }),
              transaction_type: z.string(),
              status: z.string(),
              gateway_datetime: z.string(),
              gateway_reference: z.string(),
              transaction_reference: z.string(),
              errors: z.array(z.object({ message: z.string() })),
              metadata: z.object({}),
              card_type: z.string(),
              card: z.object({
                card_reference: z.string(),
                type: z.string(),
                expiry_date: z.string(),
                account_type: z.string(),
                scheme: z.string(),
                masked_pan: z.string(),
                last_4: z.string(),
              }),
              settlement_date: z.string(),
              processed: z.string(),
              three_ds: z.object({
                xid: z.string(),
                provider: z.string(),
                cavv: z.string(),
                eci: z.string(),
              }),
              terminal_id: z.string(),
              system_trace_audit_number: z.string(),
              retrieval_reference_number: z.string(),
              trace: z.string(),
            }),
            z.object({
              transaction_id: z.string(),
              authorization: z.object({
                status: z.string(),
                next_action: z.object({
                  type: z.string(),
                  parameters: z.union([
                    z.object({
                      three_ds_server_trans_id: z.string(),
                      acs_transaction_id: z.string(),
                      acs_signed_content: z.string(),
                      acs_reference_number: z.string(),
                      three_ds_server_url: z.string(),
                      three_ds_browser_fields: z.string(),
                    }),
                    z.object({}),
                  ]),
                }),
                expiry_datetime: z.string(),
                auth_detailed_status: z.string(),
                masked_number: z.string(),
                transaction_reference: z.string(),
              }),
              amount: z.object({ currency: z.string(), value: z.string() }),
              transaction_type: z.string(),
              status: z.string(),
              gateway_datetime: z.string(),
              gateway_reference: z.string(),
              transaction_reference: z.string(),
              errors: z.array(z.object({ message: z.string() })),
              metadata: z.object({}),
              short_transaction_id: z.string(),
              card_type: z.string(),
              card: z.object({
                card_reference: z.string(),
                type: z.string(),
                identifier: z.string(),
                provider: z.string(),
              }),
              points_used: z.number(),
              exchange_rate: z.number(),
            }),
          ])
        ),
      })
    ),
    accepted_payment_instruments: z.array(
      z.union([
        z.object({
          type: z.string(),
          configuration: z.object({
            max_points_burn: z.number(),
            min_points_burn: z.number(),
            allow_burn: z.boolean(),
            allow_earn: z.boolean(),
          }),
          name: z.string(),
          provider: z.string(),
        }),
        z.object({ type: z.string(), schemes: z.array(z.string()) }),
      ])
    ),
    user_information: z.object({
      name: z.object({ given_name: z.string(), surname: z.string() }),
      email: z.string(),
      phone: z.string(),
      address: z.object({
        street: z.string(),
        suburb: z.string(),
        state: z.string(),
        postcode: z.string(),
        country: z.string(),
      }),
      custom_user_attributes: z.object({}),
    }),
    user_information_attribute_request: z.object({
      name: z.object({ capture: z.boolean(), required: z.boolean() }),
      email: z.object({ capture: z.boolean(), required: z.boolean() }),
      phone: z.object({ capture: z.boolean(), required: z.boolean() }),
      address: z.object({ capture: z.boolean(), required: z.boolean() }),
      custom_user_attributes: z.object({}),
    }),
    wallet: z.object({
      wallet_user_id: z.string(),
      wallet_id: z.string(),
      wallet_name: z.string(),
      wallet_status: z.string(),
      wallet_aggregator_id: z.string(),
      wallet_experience_id: z.string(),
      callback_base_url: z.string(),
    }),
    non_payment_instruments: z.array(
      z.object({
        type: z.string(),
        provider: z.string(),
        name: z.string(),
        identifier: z.string(),
        metadata: z.object({}),
      })
    ),
    payment_workflow: z.string(),
    config: z.object({
      merchant_reference: z.string(),
      merchant_name: z.string(),
      location: z.string(),
      terminal_id: z.string(),
      card_acceptor_name: z.string(),
      card_acceptor_location: z.object({
        city: z.string(),
        address_line_2: z.string(),
        address_line_1: z.string(),
        state: z.string(),
        country: z.string(),
        postcode: z.string(),
      }),
    }),
    metadata: z.object({}),
    merchant: z.object({ id: z.string(), name: z.string() }),
    approval: z.object({ merchant: z.boolean(), wallet: z.boolean() }),
    force_3_ds: z.boolean(),
    restricted_item_types: z.object({
      giftcard: z.object({ present: z.boolean() }),
      loyalty: z.object({ present: z.boolean() }),
    }),
    items: z.array(
      z.object({
        amount: z.object({ currency: z.string(), value: z.string() }),
        description: z.string(),
        quantity: z.number(),
        id: z.string(),
        uri: z.string(),
        discount: z.object({
          value: z.string(),
          description: z.string(),
          currency: z.string(),
        }),
        tax: z.object({
          value: z.string(),
          description: z.string(),
          currency: z.string(),
        }),
      })
    ),
    deferred_payment_expiry_datetime: z.string(),
    expiry_datetime: z.string(),
    updated_datetime: z.string(),
    created_datetime: z.string(),
    amount: z.object({
      total: z.string(),
      currency: z.string(),
      breakdown: z.object({
        shipping: z.object({ currency: z.string(), value: z.string() }),
        handling: z.object({ currency: z.string(), value: z.string() }),
        tax_total: z.object({ currency: z.string(), value: z.string() }),
        insurance: z.object({ currency: z.string(), value: z.string() }),
        shipping_discount: z.object({
          currency: z.string(),
          value: z.string(),
        }),
        discount: z.object({ currency: z.string(), value: z.string() }),
        tax: z.object({ currency: z.string(), value: z.string() }),
      }),
    }),
    payment_context: z.string(),
    status: z.string(),
    order_reference: z.string(),
    qr: z.object({ content: z.string() }),
    order_id: z.string(),
  }),
  next_step: z.string(),
});
const requestsOpapiCallbackRequest = z.object({
  id: z.string(),
  eventType: z.string(),
  eventDatetime: z.string(),
  eventData: z.object({
    order: z.object({
      discountedItems: z.array(
        z.object({
          amount: z.object({ currency: z.string(), value: z.string() }),
          description: z.string(),
          quantity: z.number(),
          id: z.string(),
          uri: z.string(),
          discount: z.object({
            value: z.string(),
            description: z.string(),
            currency: z.string(),
          }),
          tax: z.object({
            value: z.string(),
            description: z.string(),
            currency: z.string(),
          }),
        })
      ),
      returns: z.array(
        z.object({
          amount: z.number(),
          items: z.array(
            z.object({
              amount: z.object({ currency: z.string(), value: z.string() }),
              description: z.string(),
              quantity: z.number(),
              id: z.string(),
              uri: z.string(),
              discount: z.object({
                value: z.string(),
                description: z.string(),
                currency: z.string(),
              }),
              tax: z.object({
                value: z.string(),
                description: z.string(),
                currency: z.string(),
              }),
            })
          ),
        })
      ),
      description: z.string(),
      payments: z.array(
        z.object({
          payment_id: z.string(),
          status: z.string(),
          amount: z.object({ currency: z.string(), value: z.string() }),
          created_datetime: z.string(),
          payment_reference: z.string(),
          transactions: z.array(
            z.union([
              z.object({
                transaction_id: z.string(),
                authorization: z.object({
                  status: z.string(),
                  next_action: z.object({
                    type: z.string(),
                    parameters: z.union([
                      z.object({
                        three_ds_server_trans_id: z.string(),
                        acs_transaction_id: z.string(),
                        acs_signed_content: z.string(),
                        acs_reference_number: z.string(),
                        three_ds_server_url: z.string(),
                        three_ds_browser_fields: z.string(),
                      }),
                      z.object({}),
                    ]),
                  }),
                  expiry_datetime: z.string(),
                  auth_detailed_status: z.string(),
                  masked_number: z.string(),
                  transaction_reference: z.string(),
                }),
                amount: z.object({ currency: z.string(), value: z.string() }),
                transaction_type: z.string(),
                status: z.string(),
                gateway_datetime: z.string(),
                gateway_reference: z.string(),
                transaction_reference: z.string(),
                errors: z.array(z.object({ message: z.string() })),
                metadata: z.object({}),
                card_type: z.string(),
                card: z.object({
                  card_reference: z.string(),
                  type: z.string(),
                  expiry_date: z.string(),
                  account_type: z.string(),
                  scheme: z.string(),
                  masked_pan: z.string(),
                  last_4: z.string(),
                }),
                settlement_date: z.string(),
                processed: z.string(),
                three_ds: z.object({
                  xid: z.string(),
                  provider: z.string(),
                  cavv: z.string(),
                  eci: z.string(),
                }),
                terminal_id: z.string(),
                system_trace_audit_number: z.string(),
                retrieval_reference_number: z.string(),
                trace: z.string(),
              }),
              z.object({
                transaction_id: z.string(),
                authorization: z.object({
                  status: z.string(),
                  next_action: z.object({
                    type: z.string(),
                    parameters: z.union([
                      z.object({
                        three_ds_server_trans_id: z.string(),
                        acs_transaction_id: z.string(),
                        acs_signed_content: z.string(),
                        acs_reference_number: z.string(),
                        three_ds_server_url: z.string(),
                        three_ds_browser_fields: z.string(),
                      }),
                      z.object({}),
                    ]),
                  }),
                  expiry_datetime: z.string(),
                  auth_detailed_status: z.string(),
                  masked_number: z.string(),
                  transaction_reference: z.string(),
                }),
                amount: z.object({ currency: z.string(), value: z.string() }),
                transaction_type: z.string(),
                status: z.string(),
                gateway_datetime: z.string(),
                gateway_reference: z.string(),
                transaction_reference: z.string(),
                errors: z.array(z.object({ message: z.string() })),
                metadata: z.object({}),
                short_transaction_id: z.string(),
                card_type: z.string(),
                card: z.object({
                  card_reference: z.string(),
                  type: z.string(),
                  identifier: z.string(),
                  provider: z.string(),
                }),
                points_used: z.number(),
                exchange_rate: z.number(),
              }),
            ])
          ),
        })
      ),
      acceptedPaymentInstruments: z.array(
        z.union([
          z.object({
            type: z.string(),
            configuration: z.object({
              max_points_burn: z.number(),
              min_points_burn: z.number(),
              allow_burn: z.boolean(),
              allow_earn: z.boolean(),
            }),
            name: z.string(),
            provider: z.string(),
          }),
          z.object({ type: z.string(), schemes: z.array(z.string()) }),
        ])
      ),
      userInformation: z.object({
        name: z.object({ given_name: z.string(), surname: z.string() }),
        email: z.string(),
        phone: z.string(),
        address: z.object({
          street: z.string(),
          suburb: z.string(),
          state: z.string(),
          postcode: z.string(),
          country: z.string(),
        }),
        custom_user_attributes: z.object({}),
      }),
      userInformationAttributeRequest: z.object({
        name: z.object({ capture: z.boolean(), required: z.boolean() }),
        email: z.object({ capture: z.boolean(), required: z.boolean() }),
        phone: z.object({ capture: z.boolean(), required: z.boolean() }),
        address: z.object({ capture: z.boolean(), required: z.boolean() }),
        custom_user_attributes: z.object({}),
      }),
      wallet: z.object({
        wallet_user_id: z.string(),
        wallet_id: z.string(),
        wallet_name: z.string(),
        wallet_status: z.string(),
        wallet_aggregator_id: z.string(),
        wallet_experience_id: z.string(),
        callback_base_url: z.string(),
      }),
      nonPaymentInstruments: z.array(
        z.object({
          type: z.string(),
          provider: z.string(),
          name: z.string(),
          identifier: z.string(),
          metadata: z.object({}),
        })
      ),
      paymentWorkflow: z.string(),
      config: z.object({
        merchant_reference: z.string(),
        merchant_name: z.string(),
        location: z.string(),
        terminal_id: z.string(),
        card_acceptor_name: z.string(),
        card_acceptor_location: z.object({
          city: z.string(),
          address_line_2: z.string(),
          address_line_1: z.string(),
          state: z.string(),
          country: z.string(),
          postcode: z.string(),
        }),
      }),
      metadata: z.object({}),
      merchant: z.object({ id: z.string(), name: z.string() }),
      force3DS: z.boolean(),
      approval: z.object({ merchant: z.boolean(), wallet: z.boolean() }),
      restrictedItemTypes: z.object({
        giftcard: z.object({ present: z.boolean() }),
        loyalty: z.object({ present: z.boolean() }),
      }),
      items: z.array(
        z.object({
          amount: z.object({ currency: z.string(), value: z.string() }),
          description: z.string(),
          quantity: z.number(),
          id: z.string(),
          uri: z.string(),
          discount: z.object({
            value: z.string(),
            description: z.string(),
            currency: z.string(),
          }),
          tax: z.object({
            value: z.string(),
            description: z.string(),
            currency: z.string(),
          }),
        })
      ),
      deferredPaymentExpiryDatetime: z.string(),
      expiryDatetime: z.string(),
      updatedDatetime: z.string(),
      createdDatetime: z.string(),
      paymentContext: z.string(),
      status: z.string(),
      amount: z.object({
        total: z.string(),
        currency: z.string(),
        breakdown: z.object({
          shipping: z.object({ currency: z.string(), value: z.string() }),
          handling: z.object({ currency: z.string(), value: z.string() }),
          tax_total: z.object({ currency: z.string(), value: z.string() }),
          insurance: z.object({ currency: z.string(), value: z.string() }),
          shipping_discount: z.object({
            currency: z.string(),
            value: z.string(),
          }),
          discount: z.object({ currency: z.string(), value: z.string() }),
          tax: z.object({ currency: z.string(), value: z.string() }),
        }),
      }),
      orderReference: z.string(),
      qr: z.object({ content: z.string() }),
      orderId: z.string(),
    }),
  }),
});
const requestsQrV2UpdateOrderCallbackRequest = z.object({
  id: z.string(),
  event_type: z.string(),
  event_datetime: z.string(),
  event_data: z.object({
    order: z.object({
      discounted_items: z.array(
        z.object({
          amount: z.object({ currency: z.string(), value: z.string() }),
          description: z.string(),
          quantity: z.number(),
          id: z.string(),
          uri: z.string(),
          discount: z.object({
            value: z.string(),
            description: z.string(),
            currency: z.string(),
          }),
          tax: z.object({
            value: z.string(),
            description: z.string(),
            currency: z.string(),
          }),
        })
      ),
      returns: z.array(
        z.object({
          amount: z.number(),
          items: z.array(
            z.object({
              amount: z.object({ currency: z.string(), value: z.string() }),
              description: z.string(),
              quantity: z.number(),
              id: z.string(),
              uri: z.string(),
              discount: z.object({
                value: z.string(),
                description: z.string(),
                currency: z.string(),
              }),
              tax: z.object({
                value: z.string(),
                description: z.string(),
                currency: z.string(),
              }),
            })
          ),
        })
      ),
      description: z.string(),
      payments: z.array(
        z.object({
          payment_id: z.string(),
          status: z.string(),
          amount: z.object({ currency: z.string(), value: z.string() }),
          created_datetime: z.string(),
          payment_reference: z.string(),
          transactions: z.array(
            z.union([
              z.object({
                transaction_id: z.string(),
                authorization: z.object({
                  status: z.string(),
                  next_action: z.object({
                    type: z.string(),
                    parameters: z.union([
                      z.object({
                        three_ds_server_trans_id: z.string(),
                        acs_transaction_id: z.string(),
                        acs_signed_content: z.string(),
                        acs_reference_number: z.string(),
                        three_ds_server_url: z.string(),
                        three_ds_browser_fields: z.string(),
                      }),
                      z.object({}),
                    ]),
                  }),
                  expiry_datetime: z.string(),
                  auth_detailed_status: z.string(),
                  masked_number: z.string(),
                  transaction_reference: z.string(),
                }),
                amount: z.object({ currency: z.string(), value: z.string() }),
                transaction_type: z.string(),
                status: z.string(),
                gateway_datetime: z.string(),
                gateway_reference: z.string(),
                transaction_reference: z.string(),
                errors: z.array(z.object({ message: z.string() })),
                metadata: z.object({}),
                card_type: z.string(),
                card: z.object({
                  card_reference: z.string(),
                  type: z.string(),
                  expiry_date: z.string(),
                  account_type: z.string(),
                  scheme: z.string(),
                  masked_pan: z.string(),
                  last_4: z.string(),
                }),
                settlement_date: z.string(),
                processed: z.string(),
                three_ds: z.object({
                  xid: z.string(),
                  provider: z.string(),
                  cavv: z.string(),
                  eci: z.string(),
                }),
                terminal_id: z.string(),
                system_trace_audit_number: z.string(),
                retrieval_reference_number: z.string(),
                trace: z.string(),
              }),
              z.object({
                transaction_id: z.string(),
                authorization: z.object({
                  status: z.string(),
                  next_action: z.object({
                    type: z.string(),
                    parameters: z.union([
                      z.object({
                        three_ds_server_trans_id: z.string(),
                        acs_transaction_id: z.string(),
                        acs_signed_content: z.string(),
                        acs_reference_number: z.string(),
                        three_ds_server_url: z.string(),
                        three_ds_browser_fields: z.string(),
                      }),
                      z.object({}),
                    ]),
                  }),
                  expiry_datetime: z.string(),
                  auth_detailed_status: z.string(),
                  masked_number: z.string(),
                  transaction_reference: z.string(),
                }),
                amount: z.object({ currency: z.string(), value: z.string() }),
                transaction_type: z.string(),
                status: z.string(),
                gateway_datetime: z.string(),
                gateway_reference: z.string(),
                transaction_reference: z.string(),
                errors: z.array(z.object({ message: z.string() })),
                metadata: z.object({}),
                short_transaction_id: z.string(),
                card_type: z.string(),
                card: z.object({
                  card_reference: z.string(),
                  type: z.string(),
                  identifier: z.string(),
                  provider: z.string(),
                }),
                points_used: z.number(),
                exchange_rate: z.number(),
              }),
            ])
          ),
        })
      ),
      accepted_payment_instruments: z.array(
        z.union([
          z.object({
            type: z.string(),
            configuration: z.object({
              max_points_burn: z.number(),
              min_points_burn: z.number(),
              allow_burn: z.boolean(),
              allow_earn: z.boolean(),
            }),
            name: z.string(),
            provider: z.string(),
          }),
          z.object({ type: z.string(), schemes: z.array(z.string()) }),
        ])
      ),
      user_information: z.object({
        name: z.object({ given_name: z.string(), surname: z.string() }),
        email: z.string(),
        phone: z.string(),
        address: z.object({
          street: z.string(),
          suburb: z.string(),
          state: z.string(),
          postcode: z.string(),
          country: z.string(),
        }),
        custom_user_attributes: z.object({}),
      }),
      user_information_attribute_request: z.object({
        name: z.object({ capture: z.boolean(), required: z.boolean() }),
        email: z.object({ capture: z.boolean(), required: z.boolean() }),
        phone: z.object({ capture: z.boolean(), required: z.boolean() }),
        address: z.object({ capture: z.boolean(), required: z.boolean() }),
        custom_user_attributes: z.object({}),
      }),
      wallet: z.object({
        wallet_user_id: z.string(),
        wallet_id: z.string(),
        wallet_name: z.string(),
        wallet_status: z.string(),
        wallet_aggregator_id: z.string(),
        wallet_experience_id: z.string(),
        callback_base_url: z.string(),
      }),
      non_payment_instruments: z.array(
        z.object({
          type: z.string(),
          provider: z.string(),
          name: z.string(),
          identifier: z.string(),
          metadata: z.object({}),
        })
      ),
      payment_workflow: z.string(),
      config: z.object({
        merchant_reference: z.string(),
        merchant_name: z.string(),
        location: z.string(),
        terminal_id: z.string(),
        card_acceptor_name: z.string(),
        card_acceptor_location: z.object({
          city: z.string(),
          address_line_2: z.string(),
          address_line_1: z.string(),
          state: z.string(),
          country: z.string(),
          postcode: z.string(),
        }),
      }),
      metadata: z.object({}),
      merchant: z.object({ id: z.string(), name: z.string() }),
      approval: z.object({ merchant: z.boolean(), wallet: z.boolean() }),
      force_3_ds: z.boolean(),
      restricted_item_types: z.object({
        giftcard: z.object({ present: z.boolean() }),
        loyalty: z.object({ present: z.boolean() }),
      }),
      items: z.array(
        z.object({
          amount: z.object({ currency: z.string(), value: z.string() }),
          description: z.string(),
          quantity: z.number(),
          id: z.string(),
          uri: z.string(),
          discount: z.object({
            value: z.string(),
            description: z.string(),
            currency: z.string(),
          }),
          tax: z.object({
            value: z.string(),
            description: z.string(),
            currency: z.string(),
          }),
        })
      ),
      deferred_payment_expiry_datetime: z.string(),
      expiry_datetime: z.string(),
      updated_datetime: z.string(),
      created_datetime: z.string(),
      amount: z.object({
        total: z.string(),
        currency: z.string(),
        breakdown: z.object({
          shipping: z.object({ currency: z.string(), value: z.string() }),
          handling: z.object({ currency: z.string(), value: z.string() }),
          tax_total: z.object({ currency: z.string(), value: z.string() }),
          insurance: z.object({ currency: z.string(), value: z.string() }),
          shipping_discount: z.object({
            currency: z.string(),
            value: z.string(),
          }),
          discount: z.object({ currency: z.string(), value: z.string() }),
          tax: z.object({ currency: z.string(), value: z.string() }),
        }),
      }),
      payment_context: z.string(),
      status: z.string(),
      order_reference: z.string(),
      qr: z.object({ content: z.string() }),
      order_id: z.string(),
    }),
  }),
});
const systemHealthResponse = z.object({ status: z.string() });
const serviceDebugInfoResponse = z.object({
  env: z.any(),
  health_summary: z.object({ status: z.string() }),
});

export const contract = c.router({
  postV1AdminGlobalWallets: {
    method: "POST",
    path: "/v1/admin/global/wallets",
    responses: {
      201: adminCreateWalletResponse,
      400: errorResponse,
      401: errorResponse,
      403: errorResponse,
      409: errorResponse,
    },
    body: adminCreateWalletRequest,
    summary: "",
  },
  putV1AdminGlobalConfigurationsAll: {
    method: "PUT",
    path: "/v1/admin/global/configurations/all",
    responses: {
      204: z.void(),
      400: errorResponse,
      401: errorResponse,
      403: errorResponse,
    },
    body: adminCreateWalletConfigRequest,
    query: z.object({
      version: z.string(),
    }),
    summary: "",
  },
  putV1AdminGlobalWalletsWalletIdConfigurationsAll: {
    method: "PUT",
    path: "/v1/admin/global/wallets/{wallet_id}/configurations/all",
    responses: {
      204: z.void(),
      400: errorResponse,
      401: errorResponse,
      403: errorResponse,
    },
    body: adminCreateWalletConfigRequest,
    query: z.object({
      version: z.string(),
    }),
    pathParams: z.object({
      wallet_id: z.string(),
    }),
    summary: "",
  },
  postV1AdminIdentityUsers: {
    method: "POST",
    path: "/v1/admin/identity/users",
    responses: {
      201: createUserProfileResponse,
      202: z.void(),
      400: errorResponse,
      401: errorResponse,
      403: errorResponse,
      409: errorResponse,
    },
    body: createUserProfileRequest,
    summary: "",
  },
  getV1AdminIdentityUsersUserId: {
    method: "GET",
    path: "/v1/admin/identity/users/{user_id}",
    responses: {
      200: getProfileByUserIdResponse,
      400: errorResponse,
      401: errorResponse,
      403: errorResponse,
      404: errorResponse,
    },
    query: z.object({
      include_deleted: z.boolean(),
    }),
    pathParams: z.object({
      user_id: z.string(),
    }),
    summary: "",
  },
  deleteV1AdminIdentityUsersUserId: {
    method: "DELETE",
    path: "/v1/admin/identity/users/{user_id}",
    responses: {
      204: z.void(),
      400: errorResponse,
      401: errorResponse,
      403: errorResponse,
      404: errorResponse,
    },
    body: adminDeleteUserRequest,
    pathParams: z.object({
      user_id: z.string(),
    }),
    summary: "",
  },
  postV1AdminIdentityUsersUserIdBlock: {
    method: "POST",
    path: "/v1/admin/identity/users/{user_id}/block",
    responses: {
      204: z.void(),
      400: errorResponse,
      401: errorResponse,
      403: errorResponse,
      404: errorResponse,
    },
    body: z.void(),
    pathParams: z.object({
      user_id: z.string(),
    }),
    summary: "",
  },
  deleteV1AdminIdentityUsersUserIdBlock: {
    method: "DELETE",
    path: "/v1/admin/identity/users/{user_id}/block",
    responses: {
      204: z.void(),
      400: errorResponse,
      401: errorResponse,
      403: errorResponse,
      404: errorResponse,
    },
    body: z.void(),
    pathParams: z.object({
      user_id: z.string(),
    }),
    summary: "",
  },
  getV1AdminIdentityWalletsWalletIdProfiles: {
    method: "GET",
    path: "/v1/admin/identity/wallets/{wallet_id}/profiles",
    responses: {
      200: listProfilesByWalletIdResponse,
      400: errorResponse,
      401: errorResponse,
      403: errorResponse,
    },
    query: z.object({
      limit: z.any(),
      include_deleted: z.boolean(),
      next_key: z.string(),
      email: z.string(),
      mobile_number: z.string(),
    }),
    pathParams: z.object({
      wallet_id: z.string(),
    }),
    summary: "",
  },
  getV1AdminIdentityWalletsWalletIdUsers: {
    method: "GET",
    path: "/v1/admin/identity/wallets/{wallet_id}/users",
    responses: {
      200: listProfilesByWalletIdResponse,
      400: errorResponse,
      401: errorResponse,
      403: errorResponse,
    },
    query: z.object({
      limit: z.any(),
      include_deleted: z.boolean(),
      next_key: z.string(),
      email: z.string(),
      mobile_number: z.string(),
    }),
    pathParams: z.object({
      wallet_id: z.string(),
    }),
    summary: "",
  },
  getV1AdminIdentityWalletsWalletIdProfilesUserId: {
    method: "GET",
    path: "/v1/admin/identity/wallets/{wallet_id}/profiles/{user_id}",
    responses: {
      200: getProfileByUserIdResponse,
      400: errorResponse,
      401: errorResponse,
      403: errorResponse,
      404: errorResponse,
    },
    query: z.object({
      include_deleted: z.boolean(),
    }),
    pathParams: z.object({
      wallet_id: z.string(),
      user_id: z.string(),
    }),
    summary: "",
  },
  deleteV1AdminIdentityWalletsWalletIdProfilesUserId: {
    method: "DELETE",
    path: "/v1/admin/identity/wallets/{wallet_id}/profiles/{user_id}",
    responses: {
      204: z.void(),
      400: errorResponse,
      401: errorResponse,
      403: errorResponse,
      404: errorResponse,
    },
    body: adminDeleteUserRequest,
    pathParams: z.object({
      wallet_id: z.string(),
      user_id: z.string(),
    }),
    summary: "",
  },
  getV1AdminIdentityWalletsWalletIdUsersUserIdProfile: {
    method: "GET",
    path: "/v1/admin/identity/wallets/{wallet_id}/users/{user_id}/profile",
    responses: {
      200: adminProfileUserWallet,
      400: errorResponse,
      401: errorResponse,
      403: errorResponse,
      404: errorResponse,
    },
    query: z.object({
      include_deleted: z.boolean(),
    }),
    pathParams: z.object({
      wallet_id: z.string(),
      user_id: z.string(),
    }),
    summary: "",
  },
  getV1AdminIdentityWalletsWalletIdUsersUserId: {
    method: "GET",
    path: "/v1/admin/identity/wallets/{wallet_id}/users/{user_id}",
    responses: {
      200: adminProfileUserWallet,
      400: errorResponse,
      401: errorResponse,
      403: errorResponse,
      404: errorResponse,
    },
    query: z.object({
      include_deleted: z.boolean(),
    }),
    pathParams: z.object({
      wallet_id: z.string(),
      user_id: z.string(),
    }),
    summary: "",
  },
  patchV1AdminIdentityWalletsWalletIdUsersUserId: {
    method: "PATCH",
    path: "/v1/admin/identity/wallets/{wallet_id}/users/{user_id}",
    responses: {
      200: updateUserWalletResponse,
      400: errorResponse,
      401: errorResponse,
      403: errorResponse,
      404: errorResponse,
    },
    body: updateUserWalletRequest,
    pathParams: z.object({
      wallet_id: z.string(),
      user_id: z.string(),
    }),
    summary: "",
  },
  deleteV1AdminIdentityWalletsWalletIdUsersUserId: {
    method: "DELETE",
    path: "/v1/admin/identity/wallets/{wallet_id}/users/{user_id}",
    responses: {
      204: z.void(),
      400: errorResponse,
      401: errorResponse,
      403: errorResponse,
      404: errorResponse,
    },
    body: adminDeleteUserRequest,
    pathParams: z.object({
      wallet_id: z.string(),
      user_id: z.string(),
    }),
    summary: "",
  },
  postV1AdminIdentityWalletsWalletIdUsersUserIdRestrict: {
    method: "POST",
    path: "/v1/admin/identity/wallets/{wallet_id}/users/{user_id}/restrict",
    responses: {
      204: z.void(),
      400: errorResponse,
      401: errorResponse,
      403: errorResponse,
      404: errorResponse,
    },
    body: z.void(),
    pathParams: z.object({
      wallet_id: z.string(),
      user_id: z.string(),
    }),
    summary: "",
  },
  deleteV1AdminIdentityWalletsWalletIdUsersUserIdRestrict: {
    method: "DELETE",
    path: "/v1/admin/identity/wallets/{wallet_id}/users/{user_id}/restrict",
    responses: {
      204: z.void(),
      400: errorResponse,
      401: errorResponse,
      403: errorResponse,
      404: errorResponse,
    },
    body: z.void(),
    pathParams: z.object({
      wallet_id: z.string(),
      user_id: z.string(),
    }),
    summary: "",
  },
  postV1AdminIdentityWalletsWalletIdUsersUserIdUnrestrict: {
    method: "POST",
    path: "/v1/admin/identity/wallets/{wallet_id}/users/{user_id}/unrestrict",
    responses: {
      204: z.void(),
      400: errorResponse,
      401: errorResponse,
      403: errorResponse,
      404: errorResponse,
    },
    body: z.void(),
    pathParams: z.object({
      wallet_id: z.string(),
      user_id: z.string(),
    }),
    summary: "",
  },
  postV1AdminIdentityWalletsWalletIdUsersUserIdBlock: {
    method: "POST",
    path: "/v1/admin/identity/wallets/{wallet_id}/users/{user_id}/block",
    responses: {
      204: z.void(),
      400: errorResponse,
      401: errorResponse,
      403: errorResponse,
      404: errorResponse,
    },
    body: z.void(),
    pathParams: z.object({
      wallet_id: z.string(),
      user_id: z.string(),
    }),
    summary: "",
  },
  postV1AdminIdentityWalletsWalletIdUsersUserIdUnblock: {
    method: "POST",
    path: "/v1/admin/identity/wallets/{wallet_id}/users/{user_id}/unblock",
    responses: {
      204: z.void(),
      400: errorResponse,
      401: errorResponse,
      403: errorResponse,
      404: errorResponse,
    },
    body: z.void(),
    pathParams: z.object({
      wallet_id: z.string(),
      user_id: z.string(),
    }),
    summary: "",
  },
  postV1AdminIdentityWalletsWalletIdEmailInitiateChange: {
    method: "POST",
    path: "/v1/admin/identity/wallets/{wallet_id}/email/initiate-change",
    responses: {
      202: z.void(),
      400: errorResponse,
      401: errorResponse,
      403: errorResponse,
      404: errorResponse,
      409: errorResponse,
    },
    body: adminEmailUpdateRequest,
    pathParams: z.object({
      wallet_id: z.string(),
    }),
    summary: "",
  },
  postV1AdminIdentityWalletsWalletIdEmailVerify: {
    method: "POST",
    path: "/v1/admin/identity/wallets/{wallet_id}/email/verify",
    responses: {
      200: z.void(),
      400: errorResponse,
      401: errorResponse,
      403: errorResponse,
      404: errorResponse,
    },
    body: adminVerifyEmailUpdateRequest,
    pathParams: z.object({
      wallet_id: z.string(),
    }),
    summary: "",
  },
  postV1AdminIdentityWalletsWalletIdMobileNumberInitiateChange: {
    method: "POST",
    path: "/v1/admin/identity/wallets/{wallet_id}/mobile-number/initiate-change",
    responses: {
      202: z.void(),
      400: errorResponse,
      401: errorResponse,
      403: errorResponse,
      404: errorResponse,
      409: errorResponse,
    },
    body: adminMobileNumberUpdateRequest,
    pathParams: z.object({
      wallet_id: z.string(),
    }),
    summary: "",
  },
  postV1AdminIdentityWalletsWalletIdMobileNumberVerify: {
    method: "POST",
    path: "/v1/admin/identity/wallets/{wallet_id}/mobile-number/verify",
    responses: {
      200: z.void(),
      400: errorResponse,
      401: errorResponse,
      403: errorResponse,
      404: errorResponse,
    },
    body: adminVerifyMobileNumberUpdateRequest,
    pathParams: z.object({
      wallet_id: z.string(),
    }),
    summary: "",
  },
  postV1IdentityMigrationsProfiles: {
    method: "POST",
    path: "/v1/identity/migrations/profiles",
    responses: {
      201: migrateUserProfileResponse,
      400: docErrorResponse,
      401: docErrorResponse,
      403: docErrorResponse,
      409: docErrorResponse,
    },
    body: migrateUserProfileRequest,
    summary: "",
  },
  postV1IdentityMigrationsAddresses: {
    method: "POST",
    path: "/v1/identity/migrations/addresses",
    responses: {
      200: migrateUserAddressResponse,
      400: docErrorResponse,
      401: docErrorResponse,
      403: docErrorResponse,
    },
    body: migrateUserAddressRequest,
    summary: "",
  },
  getV1Profiles: {
    method: "GET",
    path: "/v1/profiles",
    responses: {
      200: getUserProfileResponse,
      400: errorResponse,
      401: errorResponse,
      403: errorResponse,
    },
    summary: "",
  },
  postV1Profiles: {
    method: "POST",
    path: "/v1/profiles",
    responses: {
      201: createUserProfileResponse,
      202: z.void(),
      400: errorResponse,
      401: errorResponse,
      403: errorResponse,
      409: errorResponse,
    },
    body: createUserProfileRequest,
    summary: "",
  },
  patchV1Profiles: {
    method: "PATCH",
    path: "/v1/profiles",
    responses: {
      200: updateUserProfileResponse,
      400: errorResponse,
      401: errorResponse,
      403: errorResponse,
      404: errorResponse,
    },
    body: updateUserProfileRequest,
    summary: "",
  },
  deleteV1Profiles: {
    method: "DELETE",
    path: "/v1/profiles",
    responses: {
      204: z.void(),
      401: errorResponse,
      403: errorResponse,
    },
    body: deleteProfileRequest,
    summary: "",
  },
  getV1ProfilesAddresses: {
    method: "GET",
    path: "/v1/profiles/addresses",
    responses: {
      200: listAddressesResponse,
      400: errorResponse,
      401: errorResponse,
      403: errorResponse,
    },
    query: z.object({
      include_deleted: z.boolean(),
    }),
    summary: "",
  },
  postV1ProfilesAddresses: {
    method: "POST",
    path: "/v1/profiles/addresses",
    responses: {
      200: createAddressResponse,
      400: errorResponse,
      401: errorResponse,
      403: errorResponse,
    },
    body: createAddressRequest,
    summary: "",
  },
  deleteV1ProfilesAddressesId: {
    method: "DELETE",
    path: "/v1/profiles/addresses/{id}",
    responses: {
      204: z.void(),
      400: errorResponse,
      401: errorResponse,
      403: errorResponse,
      404: errorResponse,
    },
    body: z.void(),
    pathParams: z.object({
      id: z.string(),
    }),
    summary: "",
  },
  patchV1ProfilesAddressesId: {
    method: "PATCH",
    path: "/v1/profiles/addresses/{id}",
    responses: {
      200: updateAddressResponse,
      400: errorResponse,
      401: errorResponse,
      403: errorResponse,
      404: errorResponse,
    },
    body: updateAddressRequest,
    pathParams: z.object({
      id: z.string(),
    }),
    summary: "",
  },
  postV1ProfilesEmailInitiateChange: {
    method: "POST",
    path: "/v1/profiles/email/initiate-change",
    responses: {
      202: z.void(),
      400: errorResponse,
      401: errorResponse,
      403: errorResponse,
      409: errorResponse,
    },
    body: initiateEmailUpdateRequest,
    summary: "",
  },
  postV1ProfilesEmailResendChange: {
    method: "POST",
    path: "/v1/profiles/email/resend-change",
    responses: {
      204: z.void(),
      400: errorResponse,
      401: errorResponse,
      403: errorResponse,
      409: errorResponse,
    },
    body: z.void(),
    summary: "",
  },
  postV1ProfilesMobileNumberResendChange: {
    method: "POST",
    path: "/v1/profiles/mobile-number/resend-change",
    responses: {
      204: z.void(),
      401: errorResponse,
      403: errorResponse,
      409: errorResponse,
    },
    body: mobileNumberUpdateRequest,
    summary: "",
  },
  postV1ProfilesEmailFinalizeChange: {
    method: "POST",
    path: "/v1/profiles/email/finalize-change",
    responses: {
      200: z.void(),
      400: errorResponse,
      401: errorResponse,
      403: errorResponse,
    },
    body: finalizeEmailUpdateRequest,
    summary: "",
  },
  postV1ProfilesEmailVerify: {
    method: "POST",
    path: "/v1/profiles/email/verify",
    responses: {
      200: z.void(),
      400: errorResponse,
      401: errorResponse,
      403: errorResponse,
      404: errorResponse,
    },
    body: verifyEmailUpdateRequest,
    summary: "",
  },
  postV1ProfilesMobileNumberInitiateChange: {
    method: "POST",
    path: "/v1/profiles/mobile-number/initiate-change",
    responses: {
      202: z.void(),
      400: errorResponse,
      401: errorResponse,
      403: errorResponse,
      409: errorResponse,
    },
    body: mobileNumberUpdateRequest,
    summary: "",
  },
  postV1ProfilesMobileNumberVerify: {
    method: "POST",
    path: "/v1/profiles/mobile-number/verify",
    responses: {
      200: z.void(),
      400: errorResponse,
      401: errorResponse,
      403: errorResponse,
      404: errorResponse,
    },
    body: verifyMobileNumberUpdateRequest,
    summary: "",
  },
  postV1ProfilesMobileNumberCancelChange: {
    method: "POST",
    path: "/v1/profiles/mobile-number/cancel-change",
    responses: {
      200: z.void(),
      400: errorResponse,
      401: errorResponse,
      403: errorResponse,
    },
    body: mobileNumberUpdateRequest,
    summary: "",
  },
  deleteV1ProfilesWalletWalletId: {
    method: "DELETE",
    path: "/v1/profiles/wallet/{wallet_id}",
    responses: {
      204: z.void(),
      401: errorResponse,
      403: errorResponse,
      404: errorResponse,
    },
    body: z.void(),
    pathParams: z.object({
      wallet_id: z.string(),
    }),
    summary: "",
  },
  deleteV1ProfilesWalletsWalletId: {
    method: "DELETE",
    path: "/v1/profiles/wallets/{wallet_id}",
    responses: {
      204: z.void(),
      401: errorResponse,
      403: errorResponse,
      404: errorResponse,
    },
    body: z.void(),
    pathParams: z.object({
      wallet_id: z.string(),
    }),
    summary: "",
  },
  postV1ProfilesMarketingSubscribe: {
    method: "POST",
    path: "/v1/profiles/marketing/subscribe",
    responses: {
      200: updateUserWalletResponse,
      401: errorResponse,
      403: errorResponse,
      404: errorResponse,
    },
    body: z.void(),
    summary: "",
  },
  postV1ProfilesMarketingUnsubscribe: {
    method: "POST",
    path: "/v1/profiles/marketing/unsubscribe",
    responses: {
      200: updateUserWalletResponse,
      400: errorResponse,
      401: errorResponse,
      403: errorResponse,
      404: errorResponse,
    },
    body: z.void(),
    query: z.object({
      user_id: z.string(),
      wallet_id: z.string(),
    }),
    summary: "",
  },
  postV1IdentityDatadog: {
    method: "POST",
    path: "/v1/identity/datadog",
    responses: {
      202: z.void(),
      401: errorResponse,
      403: errorResponse,
    },
    body: webhook,
    summary: "",
  },
  postV1IdentityWebhooksDatadog: {
    method: "POST",
    path: "/v1/identity/webhooks/datadog",
    responses: {
      202: z.void(),
      401: errorResponse,
      403: errorResponse,
    },
    body: webhook,
    summary: "",
  },
  postV1IdentityPushEventBatchOrigin: {
    method: "POST",
    path: "/v1/identity/push-event-batch/{origin}",
    responses: {
      202: z.void(),
      401: errorResponse,
      403: errorResponse,
    },
    body: webhook,
    summary: "",
  },
  postV1IdentityWebhooksOrigin: {
    method: "POST",
    path: "/v1/identity/webhooks/{origin}",
    responses: {
      202: z.void(),
      401: errorResponse,
      403: errorResponse,
    },
    body: webhook,
    pathParams: z.object({
      origin: z.string(),
    }),
    summary: "",
  },
  getV1AdminPaymentsWalletsWalletIdUsersUserIdSettingsPayments: {
    method: "GET",
    path: "/v1/admin/payments/wallets/{wallet_id}/users/{user_id}/settings/payments",
    responses: {
      200: z.void(),
      400: errorResponse,
      401: errorResponse,
      403: errorResponse,
      404: errorResponse,
    },
    pathParams: z.object({
      wallet_id: z.string(),
      user_id: z.string(),
    }),
    summary: "",
  },
  getV1AdminPaymentsWalletsWalletIdUsersUserIdSettings: {
    method: "GET",
    path: "/v1/admin/payments/wallets/{wallet_id}/users/{user_id}/settings",
    responses: {
      200: z.void(),
      400: errorResponse,
      401: errorResponse,
      403: errorResponse,
      404: errorResponse,
    },
    pathParams: z.object({
      wallet_id: z.string(),
      user_id: z.string(),
    }),
    summary: "",
  },
  getV1AdminPaymentsWalletsWalletIdUsersUserIdPaymentMethods: {
    method: "GET",
    path: "/v1/admin/payments/wallets/{wallet_id}/users/{user_id}/payment-methods",
    responses: {
      200: adminListPaymentMethodsResponse,
      400: errorResponse,
      401: errorResponse,
      403: errorResponse,
    },
    query: z.object({
      type: z.string(),
      schemes: z.array(z.string()),
      card_type: z.string(),
      include_deleted: z.boolean(),
    }),
    pathParams: z.object({
      wallet_id: z.string(),
      user_id: z.string(),
    }),
    summary: "",
  },
  deleteV1AdminPaymentsWalletsWalletIdUsersUserIdPaymentMethods: {
    method: "DELETE",
    path: "/v1/admin/payments/wallets/{wallet_id}/users/{user_id}/payment-methods",
    responses: {
      204: z.union([
        z.object({
          reason: z.string(),
          errors: z.array(
            z.object({
              name: z.string(),
              message: z.string(),
              stack: z.string(),
              cause: z.object({}),
            })
          ),
        }),
        z.any(),
      ]),
      400: errorResponse,
      401: errorResponse,
      403: errorResponse,
    },
    body: z.void(),
    pathParams: z.object({
      wallet_id: z.string(),
      user_id: z.string(),
    }),
    summary: "",
  },
  getV1AdminPaymentsWalletsWalletIdUsersUserIdOrders: {
    method: "GET",
    path: "/v1/admin/payments/wallets/{wallet_id}/users/{user_id}/orders",
    responses: {
      200: listOrdersResponse,
      400: errorResponse,
      401: errorResponse,
      403: errorResponse,
    },
    query: z.object({
      type: z.string(),
      payee_id: z.string(),
      payee_name: z.string(),
      from_date: z.string(),
      to_date: z.string(),
      status: z.array(z.string()),
      min_amount: z.any(),
      max_amount: z.any(),
      limit: z.any(),
      next_key: z.string(),
    }),
    pathParams: z.object({
      wallet_id: z.string(),
      user_id: z.string(),
    }),
    summary: "",
  },
  getV1AdminPaymentsWalletsWalletIdOrdersOrderId: {
    method: "GET",
    path: "/v1/admin/payments/wallets/{wallet_id}/orders/{order_id}",
    responses: {
      200: getOrderByIdResponse,
      401: errorResponse,
      403: errorResponse,
      404: errorResponse,
      409: errorResponse,
    },
    pathParams: z.object({
      wallet_id: z.string(),
      order_id: z.string(),
    }),
    summary: "",
  },
  postV1AdminPaymentsWalletsWalletIdLoyaltyPrograms: {
    method: "POST",
    path: "/v1/admin/payments/wallets/{wallet_id}/loyalty/programs",
    responses: {
      201: adminCreateLoyaltyProgramsResponse,
      401: errorResponse,
      403: errorResponse,
    },
    body: adminCreateLoyaltyProgramsRequest,
    pathParams: z.object({
      wallet_id: z.string(),
    }),
    summary: "",
  },
  postV1AdminPaymentsWalletsWalletIdLoyaltyPrograms2: {
    method: "POST",
    path: "/v1/admin/payments/wallets/{wallet_id}/loyalty-programs",
    responses: {
      201: adminCreateLoyaltyProgramsResponse,
      401: errorResponse,
      403: errorResponse,
    },
    body: adminCreateLoyaltyProgramsRequest,
    pathParams: z.object({
      wallet_id: z.string(),
    }),
    summary: "",
  },
  postV1AdminPaymentsWalletsWalletIdLoyaltyProgramsColesTeamMembersWhitelist: {
    method: "POST",
    path: "/v1/admin/payments/wallets/{wallet_id}/loyalty-programs/coles-team-members/whitelist",
    responses: {
      200: adminColesTeamMembersCardsWhitelistResponse,
      400: errorResponse,
      401: errorResponse,
      403: errorResponse,
      409: errorResponse,
    },
    body: adminColesTeamMembersCardsWhitelistRequest,
    pathParams: z.object({
      wallet_id: z.string(),
    }),
    summary: "",
  },
  postV1AdminPaymentsWalletsWalletIdLoyaltyProgramsColesTeamMembersBlacklist: {
    method: "POST",
    path: "/v1/admin/payments/wallets/{wallet_id}/loyalty-programs/coles-team-members/blacklist",
    responses: {
      204: z.void(),
      400: errorResponse,
      401: errorResponse,
      403: errorResponse,
      409: errorResponse,
    },
    body: adminLoyaltyBlacklistRequest,
    pathParams: z.object({
      wallet_id: z.string(),
    }),
    summary: "",
  },
  postV1AdminPaymentsLoyaltyPrograms: {
    method: "POST",
    path: "/v1/admin/payments/loyalty-programs",
    responses: {
      201: adminCreateLoyaltyProgramsResponse,
      401: errorResponse,
      403: errorResponse,
    },
    body: adminCreateLoyaltyProgramsRequest,
    summary: "",
  },
  putV1AdminPaymentsLoyaltyPrograms: {
    method: "PUT",
    path: "/v1/admin/payments/loyalty-programs",
    responses: {
      200: adminUpdateLoyaltyProgramsResponse,
      401: errorResponse,
      403: errorResponse,
    },
    body: adminUpdateLoyaltyProgramsRequest,
    summary: "",
  },
  postV1AdminPaymentsLoyaltyProgramsColesTeamMembersWhitelist: {
    method: "POST",
    path: "/v1/admin/payments/loyalty-programs/coles-team-members/whitelist",
    responses: {
      200: adminColesTeamMembersCardsWhitelistResponse,
      400: errorResponse,
      401: errorResponse,
      403: errorResponse,
      409: errorResponse,
    },
    body: adminColesTeamMembersCardsWhitelistRequest,
    summary: "",
  },
  postV1AdminPaymentsLoyaltyProgramsColesTeamMembersBlacklist: {
    method: "POST",
    path: "/v1/admin/payments/loyalty-programs/coles-team-members/blacklist",
    responses: {
      204: z.void(),
      400: errorResponse,
      401: errorResponse,
      403: errorResponse,
      409: errorResponse,
    },
    body: adminLoyaltyBlacklistRequest,
    summary: "",
  },
  postV1PaymentsMigrationsBankCards: {
    method: "POST",
    path: "/v1/payments/migrations/bank-cards",
    responses: {
      200: migratePaymentMethodResponse,
      400: docErrorResponse,
      401: docErrorResponse,
      403: docErrorResponse,
      409: docErrorResponse,
    },
    body: migratePaymentMethodRequest,
    summary: "",
  },
  postV1PaymentsMigrationsBankCardsSettingsDefault: {
    method: "POST",
    path: "/v1/payments/migrations/bank-cards/settings/default",
    responses: {
      200: makePaymentMethodDefaultResponse,
      400: docErrorResponse,
      401: docErrorResponse,
      403: docErrorResponse,
      409: docErrorResponse,
    },
    body: makePaymentMethodDefaultRequest,
    summary: "",
  },
  postV1PaymentsMigrationsOrders: {
    method: "POST",
    path: "/v1/payments/migrations/orders",
    responses: {
      200: migrateOrderResponse,
      400: docErrorResponse,
      401: docErrorResponse,
      403: docErrorResponse,
    },
    body: migrateOrderRequest,
    summary: "",
  },
  postV1PaymentsMigrationsLoyaltyCards: {
    method: "POST",
    path: "/v1/payments/migrations/loyalty-cards",
    responses: {
      200: migrateLoyaltyCardResponse,
      400: docErrorResponse,
      401: docErrorResponse,
      403: docErrorResponse,
      404: docErrorResponse,
      409: docErrorResponse,
    },
    body: migrateLoyaltyCardRequest,
    summary: "",
  },
  getV1Orders: {
    method: "GET",
    path: "/v1/orders",
    responses: {
      200: listOrdersResponse,
      400: errorResponse,
    },
    query: z.object({
      type: z.string(),
      payee_id: z.string(),
      payee_name: z.string(),
      from_date: z.string(),
      to_date: z.string(),
      status: z.array(z.string()),
      min_amount: z.any(),
      max_amount: z.any(),
      limit: z.any(),
      next_key: z.string(),
    }),
    summary: "",
  },
  getV1OrdersId: {
    method: "GET",
    path: "/v1/orders/{id}",
    responses: {
      200: listOrdersResponse,
      404: errorResponse,
      409: errorResponse,
    },
    pathParams: z.object({
      id: z.string(),
    }),
    summary: "",
  },
  getV1PaymentMethods: {
    method: "GET",
    path: "/v1/payment-methods",
    responses: {
      200: listPaymentMethodsResponse,
      400: errorResponse,
      401: errorResponse,
      403: errorResponse,
    },
    query: z.object({
      type: z.string(),
      schemes: z.array(z.string()),
      card_type: z.string(),
      program_id: z.string(),
    }),
    summary: "",
  },
  getV1PaymentMethodsId: {
    method: "GET",
    path: "/v1/payment-methods/{id}",
    responses: {
      200: getPaymentMethodByIdResponse,
      401: errorResponse,
      403: errorResponse,
      404: errorResponse,
    },
    pathParams: z.object({
      id: z.string(),
    }),
    summary: "",
  },
  getV1PaymentMethodsEncryptionPublicKey: {
    method: "GET",
    path: "/v1/payment-methods/encryption/public-key",
    responses: {
      200: getPublicKeyResponse,
      400: errorResponse,
      401: errorResponse,
      403: errorResponse,
    },
    summary: "",
  },
  getV1PaymentMethodsBankCardsId: {
    method: "GET",
    path: "/v1/payment-methods/bank-cards/{id}",
    responses: {
      200: bankCardResponse,
      401: errorResponse,
      403: errorResponse,
      404: errorResponse,
    },
    pathParams: z.object({
      id: z.string(),
    }),
    summary: "",
  },
  patchV1PaymentMethodsBankCardsId: {
    method: "PATCH",
    path: "/v1/payment-methods/bank-cards/{id}",
    responses: {
      200: updateBankCardPaymentMethodResponse,
      400: errorResponse,
      401: errorResponse,
      403: errorResponse,
      404: errorResponse,
    },
    body: updateBankCardPaymentMethodRequest,
    pathParams: z.object({
      id: z.string(),
    }),
    summary: "",
  },
  deleteV1PaymentMethodsBankCardsId: {
    method: "DELETE",
    path: "/v1/payment-methods/bank-cards/{id}",
    responses: {
      204: z.void(),
      401: errorResponse,
      403: errorResponse,
      404: errorResponse,
    },
    body: z.void(),
    pathParams: z.object({
      id: z.string(),
    }),
    summary: "",
  },
  postV1PaymentMethodsBankCards: {
    method: "POST",
    path: "/v1/payment-methods/bank-cards",
    responses: {
      200: createBankCardPaymentMethodResponse,
      400: errorResponse,
      401: errorResponse,
      403: errorResponse,
    },
    body: createBankCardPaymentMethodRequest,
    summary: "",
  },
  postV1PaymentMethodsLoyalty: {
    method: "POST",
    path: "/v1/payment-methods/loyalty",
    responses: {
      200: createLoyaltyCardResponse,
      400: errorResponse,
      401: errorResponse,
      403: errorResponse,
      409: errorResponse,
    },
    body: createLoyaltyCardRequest,
    summary: "",
  },
  getV1PaymentMethodsLoyalty: {
    method: "GET",
    path: "/v1/payment-methods/loyalty",
    responses: {
      200: listLoyaltyCardsResponse,
      401: errorResponse,
      403: errorResponse,
    },
    query: z.object({
      program_id: z.string(),
    }),
    summary: "",
  },
  getV1PaymentMethodsLoyaltyId: {
    method: "GET",
    path: "/v1/payment-methods/loyalty/{id}",
    responses: {
      200: loyaltyCardWithLiveData,
      401: errorResponse,
      403: errorResponse,
      404: errorResponse,
    },
    pathParams: z.object({
      id: z.string(),
    }),
    summary: "",
  },
  deleteV1PaymentMethodsLoyaltyId: {
    method: "DELETE",
    path: "/v1/payment-methods/loyalty/{id}",
    responses: {
      204: z.void(),
      401: errorResponse,
      403: errorResponse,
      404: errorResponse,
    },
    body: z.void(),
    pathParams: z.object({
      id: z.string(),
    }),
    summary: "",
  },
  patchV1PaymentMethodsLoyaltyId: {
    method: "PATCH",
    path: "/v1/payment-methods/loyalty/{id}",
    responses: {
      200: updateLoyaltyCardResponse,
      400: errorResponse,
      401: errorResponse,
      403: errorResponse,
      404: errorResponse,
    },
    body: updateLoyaltyCardRequest,
    summary: "",
  },
  postV1PaymentMethodsLoyaltyIdDefault: {
    method: "POST",
    path: "/v1/payment-methods/loyalty/{id}/default",
    responses: {
      204: updateLoyaltyCardResponse,
      401: errorResponse,
      403: errorResponse,
      404: errorResponse,
    },
    body: z.void(),
    summary: "",
  },
  getV1PaymentMethodsLoyaltyPrograms: {
    method: "GET",
    path: "/v1/payment-methods/loyalty/programs",
    responses: {
      200: listLoyaltyProgramsResponse,
      401: errorResponse,
      403: errorResponse,
    },
    summary: "",
  },
  getV1PaymentMethodsLoyaltyProgramsId: {
    method: "GET",
    path: "/v1/payment-methods/loyalty/programs/{id}",
    responses: {
      200: loyaltyProgram,
      401: errorResponse,
      403: errorResponse,
    },
    summary: "",
  },
  postV1PaymentMethodsLoyaltyFlybuysInitiateLink: {
    method: "POST",
    path: "/v1/payment-methods/loyalty/flybuys/initiate-link",
    responses: {
      200: initiateFlybuysLinkResponse,
      401: errorResponse,
      403: errorResponse,
      409: errorResponse,
    },
    body: z.void(),
    summary: "",
  },
  postV1PaymentMethodsLoyaltyFlybuysCompleteLink: {
    method: "POST",
    path: "/v1/payment-methods/loyalty/flybuys/complete-link",
    responses: {
      200: completeFlybuysLinkResponse,
      400: errorResponse,
      401: errorResponse,
      403: errorResponse,
      409: errorResponse,
    },
    body: completeFlybuysLinkRequest,
    summary: "",
  },
  postV1PaymentMethodsLoyaltyFlybuysUnlink: {
    method: "POST",
    path: "/v1/payment-methods/loyalty/flybuys/unlink",
    responses: {
      204: z.void(),
      400: errorResponse,
      401: errorResponse,
      403: errorResponse,
      404: errorResponse,
      409: errorResponse,
    },
    body: flybuysUnlinkRequest,
    headers: z.object({
      "flybuys-brand": z.string(),
      "flybuys-channel": z.string(),
      "flybuys-partner": z.string(),
    }),
    summary: "",
  },
  patchV1PaymentMethodsLoyaltyFlybuysCredentials: {
    method: "PATCH",
    path: "/v1/payment-methods/loyalty/flybuys/credentials",
    responses: {
      204: z.void(),
      400: errorResponse,
      401: errorResponse,
      403: errorResponse,
      404: errorResponse,
    },
    body: updateLoyaltyCredentialsRequest,
    summary: "",
  },
  getV1LoyaltyPrograms: {
    method: "GET",
    path: "/v1/loyalty-programs",
    responses: {
      200: listLoyaltyProgramsResponse,
      401: errorResponse,
      403: errorResponse,
    },
    summary: "",
  },
  getV1LoyaltyProgramsId: {
    method: "GET",
    path: "/v1/loyalty-programs/{id}",
    responses: {
      200: loyaltyProgram,
      401: errorResponse,
      403: errorResponse,
    },
    summary: "",
  },
  getV1PaymentsQrQrCode: {
    method: "GET",
    path: "/v1/payments/qr/{qr_code}",
    responses: {
      200: qrGetOrderResponse,
      404: errorResponse,
    },
    pathParams: z.object({
      qr_code: z.string(),
    }),
    summary: "",
  },
  postV1PaymentsQrQrCode: {
    method: "POST",
    path: "/v1/payments/qr/{qr_code}",
    responses: {
      200: qrInitResponse,
      400: errorResponse,
    },
    body: z.void(),
    pathParams: z.object({
      qr_code: z.string(),
    }),
    summary: "",
  },
  postV1PaymentsQrAcknowledgeQrCode: {
    method: "POST",
    path: "/v1/payments/qr/acknowledge/{qr_code}",
    responses: {
      200: qrAcknowledgeResponse,
      400: errorResponse,
      404: errorResponse,
      409: errorResponse,
    },
    body: qrAcknowledgeRequest,
    pathParams: z.object({
      qr_code: z.string(),
    }),
    summary: "",
  },
  postV1PaymentsQrAuthorizeQrCode: {
    method: "POST",
    path: "/v1/payments/qr/authorize/{qr_code}",
    responses: {
      200: qrAuthorizeResponse,
      400: errorResponse,
      404: errorResponse,
      409: errorResponse,
    },
    body: qrAuthorizeRequest,
    pathParams: z.object({
      qr_code: z.string(),
    }),
    summary: "",
  },
  postV1PaymentsQrFinalizeQrCode: {
    method: "POST",
    path: "/v1/payments/qr/finalize/{qr_code}",
    responses: {
      200: qrFinalizeResponse,
      400: errorResponse,
      404: errorResponse,
      409: errorResponse,
    },
    body: qrFinalizeRequest,
    pathParams: z.object({
      qr_code: z.string(),
    }),
    summary: "",
  },
  postV1PaymentsQrAbortQrCode: {
    method: "POST",
    path: "/v1/payments/qr/abort/{qr_code}",
    responses: {
      200: abortOrderResponse,
      400: errorResponse,
      404: errorResponse,
      409: errorResponse,
    },
    body: z.void(),
    pathParams: z.object({
      qr_code: z.string(),
    }),
    summary: "",
  },
  postV1PaymentsQrV1WalletCallbackQrQrCodeCancelled: {
    method: "POST",
    path: "/v1/payments/qr/v1/wallet/callback/qr/{qr_code}/cancelled",
    responses: {
      204: z.void(),
      400: errorResponse,
      404: errorResponse,
      409: errorResponse,
    },
    body: z.void(),
    headers: z.object({
      "x-hmac-authorization": z.string(),
      "x-eqr-date": z.string(),
      "x-eqr-host": z.string(),
      "x-eqr-content-sha256": z.string(),
      "x-correlation-id": z.string(),
    }),
    pathParams: z.object({
      qr_code: z.string(),
    }),
    summary: "",
  },
  postV1PaymentsQrV1WalletCallbackQrQrCodeRefund: {
    method: "POST",
    path: "/v1/payments/qr/v1/wallet/callback/qr/{qr_code}/refund",
    responses: {
      204: z.void(),
      400: errorResponse,
      404: errorResponse,
      409: errorResponse,
    },
    body: qrRefundCallbackRequest,
    headers: z.object({
      "x-hmac-authorization": z.string(),
      "x-eqr-date": z.string(),
      "x-eqr-host": z.string(),
      "x-eqr-content-sha256": z.string(),
      "x-correlation-id": z.string(),
    }),
    pathParams: z.object({
      qr_code: z.string(),
    }),
    summary: "",
  },
  getV2PaymentsQrQrCode: {
    method: "GET",
    path: "/v2/payments/qr/{qr_code}",
    responses: {
      200: responsesQrV2OrderSummaryResponse,
    },
    pathParams: z.object({
      qr_code: z.string(),
    }),
    summary: "",
  },
  postV2PaymentsQrQrCodeClaim: {
    method: "POST",
    path: "/v2/payments/qr/{qr_code}/claim",
    responses: {
      200: responsesQrV2ClaimOrderResponse,
    },
    body: requestsQrV2ClaimOrderRequest,
    pathParams: z.object({
      qr_code: z.string(),
    }),
    summary: "",
  },
  postV2PaymentsQrQrCodeUpdate: {
    method: "POST",
    path: "/v2/payments/qr/{qr_code}/update",
    responses: {
      200: responsesQrV2UpdateOrderResponse,
    },
    body: requestsQrV2UpdateOrderRequest,
    pathParams: z.object({
      qr_code: z.string(),
    }),
    summary: "",
  },
  postV2PaymentsQrQrCodeAuthorize: {
    method: "POST",
    path: "/v2/payments/qr/{qr_code}/authorize",
    responses: {
      200: responsesQrV2AuthorizeResponse,
    },
    body: requestsQrV2AuthorizeOrderRequest,
    pathParams: z.object({
      qr_code: z.string(),
    }),
    summary: "",
  },
  postV2PaymentsQrQrCodeFinalize: {
    method: "POST",
    path: "/v2/payments/qr/{qr_code}/finalize",
    responses: {
      200: responsesQrV2FinalizeResponse,
    },
    body: requestsQrV2FinalizeOrderRequest,
    pathParams: z.object({
      qr_code: z.string(),
    }),
    summary: "",
  },
  postV2PaymentsQrQrCodeAbort: {
    method: "POST",
    path: "/v2/payments/qr/{qr_code}/abort",
    responses: {
      200: responsesQrV2AbortOrderResponse,
    },
    body: z.void(),
    pathParams: z.object({
      qr_code: z.string(),
    }),
    summary: "",
  },
  postV2PaymentsQrCallbackOpapi: {
    method: "POST",
    path: "/v2/payments/qr/callback/opapi",
    responses: {
      204: z.void(),
    },
    body: requestsOpapiCallbackRequest,
    summary: "",
  },
  postV2PaymentsQrCallback: {
    method: "POST",
    path: "/v2/payments/qr/callback",
    responses: {
      204: z.void(),
    },
    body: requestsQrV2UpdateOrderCallbackRequest,
    summary: "",
  },
  getV1SystemHealthApi: {
    method: "GET",
    path: "/v1/system/health/{api}",
    responses: {
      200: systemHealthResponse,
      500: z.union([
        z.object({ status: z.string() }),
        z.object({
          code: z.union([z.string(), z.number()]),
          message: z.string(),
          details: z.any(),
        }),
      ]),
    },
    pathParams: z.object({
      api: z.string(),
    }),
    summary: "",
  },
  getV1SystemDebugApi: {
    method: "GET",
    path: "/v1/system/debug/{api}",
    responses: {
      200: serviceDebugInfoResponse,
      401: docErrorResponse,
    },
    pathParams: z.object({
      api: z.string(),
    }),
    summary: "",
  },
});
