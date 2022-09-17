import prisma from '@config/prisma';
import { Resolver } from 'types';

const accountReturnedFields = {
  id: true,
  email: true,
  user: true,
  user_id: true,
};

const AccountResolvers: Resolver = {
  Account: {
    user: async (parent, args) => {
      const user = await prisma.user.findUnique({
        where: {
          id: parent.user_id,
        },
      });

      return user;
    },
  },
  Query: {
    getAccount: async (parent, args) => {
      const account = await prisma.account.findUnique({
        where: {
          id: args.id,
        },
        select: accountReturnedFields,
      });

      return account;
    },
    getAccounts: async (parent, args) => {
      const accounts = await prisma.account.findMany({
        select: accountReturnedFields,
      });

      return accounts;
    },
  },
  Mutation: {
    createAccount: async (parent, args) => {
      const newAccount = await prisma.account.create({
        data: {
          ...args.data,
        },
        select: accountReturnedFields,
      });
      return newAccount;
    },
    updateAccount: async (parent, args) => {
      const updatedAccount = await prisma.account.update({
        where: {
          id: args.id,
        },
        data: {
          ...args.data,
        },
        select: accountReturnedFields,
      });
      return updatedAccount;
    },
    deleteAccount: async (parent, args) => {
      const deletedAccount = await prisma.account.delete({
        where: {
          id: args.id,
        },
        select: accountReturnedFields,
      });
      return deletedAccount;
    },
  },
};

export { AccountResolvers };
