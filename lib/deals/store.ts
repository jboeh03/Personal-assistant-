// Backend dispatcher for the Deal Cockpit store.
//
//   DEALS_BACKEND=supabase  → Supabase (cloud, editable on Vercel)
//   otherwise               → local files under deal-room/ (dev, shared with
//                             the assistant's source of truth)
//
// Both implementations expose the identical API; UI code imports only from here.

import * as fileStore from "./store.file";
import * as supaStore from "./store.supabase";

const impl =
  process.env.DEALS_BACKEND === "supabase" ? supaStore : fileStore;

export const getDeal = impl.getDeal;
export const getFindings = impl.getFindings;
export const getBundle = impl.getBundle;
export const updateFinding = impl.updateFinding;
export const addFindingActivity = impl.addFindingActivity;
export const getMilestones = impl.getMilestones;
export const getEvents = impl.getEvents;
export const addEvent = impl.addEvent;
export const getMedia = impl.getMedia;
export const addMedia = impl.addMedia;
export const saveUpload = impl.saveUpload;
export const getReports = impl.getReports;
export const getTodos = impl.getTodos;
export const addTodo = impl.addTodo;
export const updateTodo = impl.updateTodo;
export const getSignatures = impl.getSignatures;
export const addSignature = impl.addSignature;
export const updateSignature = impl.updateSignature;
