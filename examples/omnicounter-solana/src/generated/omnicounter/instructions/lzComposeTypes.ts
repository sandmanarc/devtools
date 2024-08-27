/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from '@metaplex-foundation/beet'
import * as web3 from '@solana/web3.js'
import { LzComposeParams, lzComposeParamsBeet } from '../types/LzComposeParams'

/**
 * @category Instructions
 * @category LzComposeTypes
 * @category generated
 */
export type LzComposeTypesInstructionArgs = {
    params: LzComposeParams
}
/**
 * @category Instructions
 * @category LzComposeTypes
 * @category generated
 */
export const lzComposeTypesStruct = new beet.FixableBeetArgsStruct<
    LzComposeTypesInstructionArgs & {
        instructionDiscriminator: number[] /* size: 8 */
    }
>(
    [
        ['instructionDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)],
        ['params', lzComposeParamsBeet],
    ],
    'LzComposeTypesInstructionArgs'
)
/**
 * Accounts required by the _lzComposeTypes_ instruction
 *
 * @property [] count
 * @category Instructions
 * @category LzComposeTypes
 * @category generated
 */
export type LzComposeTypesInstructionAccounts = {
    count: web3.PublicKey
    anchorRemainingAccounts?: web3.AccountMeta[]
}

export const lzComposeTypesInstructionDiscriminator = [112, 121, 229, 66, 151, 84, 64, 50]

/**
 * Creates a _LzComposeTypes_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @param args to provide as instruction data to the program
 *
 * @category Instructions
 * @category LzComposeTypes
 * @category generated
 */
export function createLzComposeTypesInstruction(
    accounts: LzComposeTypesInstructionAccounts,
    args: LzComposeTypesInstructionArgs,
    programId = new web3.PublicKey('2tLJfE12h5RY7vJqK6i41taeg8ejzigoFXduBanDV4Cu')
) {
    const [data] = lzComposeTypesStruct.serialize({
        instructionDiscriminator: lzComposeTypesInstructionDiscriminator,
        ...args,
    })
    const keys: web3.AccountMeta[] = [
        {
            pubkey: accounts.count,
            isWritable: false,
            isSigner: false,
        },
    ]

    if (accounts.anchorRemainingAccounts != null) {
        for (const acc of accounts.anchorRemainingAccounts) {
            keys.push(acc)
        }
    }

    const ix = new web3.TransactionInstruction({
        programId,
        keys,
        data,
    })
    return ix
}
