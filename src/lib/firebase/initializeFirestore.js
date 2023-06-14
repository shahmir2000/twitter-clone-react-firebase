// // Memory cache is the default if no config is specified.
// initializeFirestore(app);

// // This is the default behavior if no persistence is specified.
// initializeFirestore(app, { localCache: memoryLocalCache() });

// // Defaults to single-tab persistence if no tab manager is specified.
// initializeFirestore(app, { localCache: persistentLocalCache(/*settings*/ {}) });

// // Same as `initializeFirestore(app, {localCache: persistentLocalCache(/*settings*/{})})`,
// // but more explicit about tab management.
// initializeFirestore(app, {
//   localCache: persistentLocalCache(
//     /*settings*/ { tabManager: persistentSingleTabManager() }
//   )
// });

// // Use multi-tab IndexedDb persistence.
// initializeFirestore(app, {
//   localCache: persistentLocalCache(
//     /*settings*/ { tabManager: persistentMultipleTabManager() }
//   )
// });
