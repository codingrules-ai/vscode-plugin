# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [1.1.0](https://github.com/codingrules-ai/vscode-plugin/compare/codingrules-ai-v1.0.9...codingrules-ai-v1.1.0) (2025-06-07)


### Features

* add basic tests ([9850012](https://github.com/codingrules-ai/vscode-plugin/commit/985001251dc037575d5a46237c2ac7f79676455a))
* add CI, packaging, and release workflows for extension ([1d80cf5](https://github.com/codingrules-ai/vscode-plugin/commit/1d80cf5dc5b8884440985afcbd4a8c8e976a0f5c))
* add CodingRules.ai VS Code extension with rule browsing, searching, and downloading capabilities ([7756243](https://github.com/codingrules-ai/vscode-plugin/commit/7756243d2583863907f05a179d2c95e1a996511f))
* add command to copy rule to clipboard with error handling ([0ba9ffe](https://github.com/codingrules-ai/vscode-plugin/commit/0ba9ffe4f85da85ca25118e6cd0b6dfcd481d72f))
* add environment variable support for Supabase configuration and update documentation ([160cebf](https://github.com/codingrules-ai/vscode-plugin/commit/160cebfdde58f0ebdb77e4a7c686e0693ebfc14a))
* add eslint-plugin-unused-imports for managing unused imports and update related configurations ([66f95c9](https://github.com/codingrules-ai/vscode-plugin/commit/66f95c9a9d698b5595da46c117f5c6aa94c572b4))
* add external link functionality for author profiles in rule viewer ([a413147](https://github.com/codingrules-ai/vscode-plugin/commit/a413147b061297e88956d2655cd9ebbca937893d))
* add URI handler for authentication and enhance session management ([bb65e41](https://github.com/codingrules-ai/vscode-plugin/commit/bb65e41faaaa4713e10119362e3c62edb07cafe2))
* add user profile retrieval ([e279505](https://github.com/codingrules-ai/vscode-plugin/commit/e279505a35c423bb893e1937bcfae2ec2e83c30f))
* add Xvfb setup to CI, packaging, and release workflows ([4f69c26](https://github.com/codingrules-ai/vscode-plugin/commit/4f69c261a08d8db97f79e6145d9a8218cd749070))
* clean-up architecture ([36f0bf6](https://github.com/codingrules-ai/vscode-plugin/commit/36f0bf6d3eaca8bf515259a74d22f05f5ecec53e))
* consolidate authentication commands ([7262415](https://github.com/codingrules-ai/vscode-plugin/commit/72624154fb83050b4d25b20bceb5b83f67d0c125))
* enable tree shaking in esbuild configuration ([10cba94](https://github.com/codingrules-ai/vscode-plugin/commit/10cba9430083507562da7f157707b24cf86ad12d))
* enhance authentication service with session management and user state tracking ([05c8773](https://github.com/codingrules-ai/vscode-plugin/commit/05c877320757639a2a8703c4139b108d3ce2f526))
* enhance README with authentication, private content, and favorites features ([bdb3ed7](https://github.com/codingrules-ai/vscode-plugin/commit/bdb3ed76650942cae8d1f9e93b583b7a6f8030f5))
* enhance rule download options and UI in rule viewer ([803feec](https://github.com/codingrules-ai/vscode-plugin/commit/803feecf5f487c89265f191037b18e1738e566fb))
* enhance rule downloading process with improved file handling and UI updates ([1890878](https://github.com/codingrules-ai/vscode-plugin/commit/1890878a9d359304024533b039e543e1cb62a753))
* enhance rule search functionality and add top upvoted rules feature ([9903ed6](https://github.com/codingrules-ai/vscode-plugin/commit/9903ed69528358b7a51280cdf0d1593b29f3c5ca))
* enhance Supabase service to include user authentication checks and private content handling ([b0ff271](https://github.com/codingrules-ai/vscode-plugin/commit/b0ff27133ac95e706b7938f724610e307f6bdd9d))
* implement background token refresh and cache invalidation for private rules ([6811836](https://github.com/codingrules-ai/vscode-plugin/commit/681183639712695940337bbb40ecf2c0b0bde296))
* implement dynamic URI protocol detection for various VS Code-based editors ([0eead95](https://github.com/codingrules-ai/vscode-plugin/commit/0eead955db0fc4a3f93c281d9a1fffe998d31173))
* implement favorite rules functionality with loading and display in the rules explorer ([67cbd56](https://github.com/codingrules-ai/vscode-plugin/commit/67cbd56083d3c976c69466360c183373f1f2df50))
* implement functionality to fetch and display private rules ([e0d24d0](https://github.com/codingrules-ai/vscode-plugin/commit/e0d24d0a527fca43317c399d9a6b0dd58b1dc46f))
* implement search functionality with QuickPick results and loading indicators ([0c06765](https://github.com/codingrules-ai/vscode-plugin/commit/0c0676535e5b78b70653cfc83b9ebe7af3a1abeb))
* implement user authentication features with login, logout, and profile viewing capabilities ([880dcfd](https://github.com/codingrules-ai/vscode-plugin/commit/880dcfd4eac1ea1662a43a579c9ac85c0893e513))
* improve authentication flow and service integration ([2604c57](https://github.com/codingrules-ai/vscode-plugin/commit/2604c577df7db8969a9f442c69c8f928453a39ee))
* improve file download handling and user prompts in rule downloader ([1137188](https://github.com/codingrules-ai/vscode-plugin/commit/1137188d90b6e9dc7c2a77b4c83a6aa5c65794c6))
* improve search functionality by adding tag-based filtering and enhance error reporting in UI ([1da88a1](https://github.com/codingrules-ai/vscode-plugin/commit/1da88a128f1c29adecf6cb2dec1a32f1d3ca950c))
* improve URI protocol detection ([6915600](https://github.com/codingrules-ai/vscode-plugin/commit/6915600a13f6a2f06e9d788109d6cc92bf28bd93))
* initial commit ([799fed7](https://github.com/codingrules-ai/vscode-plugin/commit/799fed7651b9d548e13e2e10cc1b733f9b4c6231))
* refactor authentication service initialization and enhance session management ([053f2ca](https://github.com/codingrules-ai/vscode-plugin/commit/053f2ca095b962a7849e1e8ca130599b24b3b99f))
* refactor extension architecture with command handlers for rules, explorer, and authentication ([474b1d5](https://github.com/codingrules-ai/vscode-plugin/commit/474b1d560a0a7b5ed6e40da3e848bcc90d08a4c4))
* refine URI protocol detection logic for VS Code-based editors ([b97bf3c](https://github.com/codingrules-ai/vscode-plugin/commit/b97bf3c6210e6eb8408f81d0f427fd73eb7cb23f))
* sort tags and tools alphabetically in rule viewer and rules explorer ([4008fd1](https://github.com/codingrules-ai/vscode-plugin/commit/4008fd1291fae52e501aafe3dc772977713e49ed))
* update CI and release workflows to package and upload VSIX files correctly ([f5e99e7](https://github.com/codingrules-ai/vscode-plugin/commit/f5e99e74471c59d8dd4b631988dcb002a634b8cc))


### Bug Fixes

* ensure clipboard functionality handles empty rule content and improve event listener setup ([839f128](https://github.com/codingrules-ai/vscode-plugin/commit/839f1281a5bb635ce6e193ca9a8322185cbf018f))
* remove unnecessary GitHub Release step from CI workflow ([011d894](https://github.com/codingrules-ai/vscode-plugin/commit/011d8942647440b0625761ae9acd1b896149606b))
* update Cline file format from .cline to .clinerules and enhance download options with generic formats ([3fe5232](https://github.com/codingrules-ai/vscode-plugin/commit/3fe523282e14b50e5f91690c6e447815fa08d182))


### Miscellaneous Chores

* add configuration files for versioning and commit linting ([414e927](https://github.com/codingrules-ai/vscode-plugin/commit/414e927bfb1f264a8d252b9cd6e912b17a8d70d0))
* add ESLint cache file to improve linting performance ([2a3e903](https://github.com/codingrules-ai/vscode-plugin/commit/2a3e903dc89ae24a85113104f71725866d8e85cd))
* bump deps ([199264b](https://github.com/codingrules-ai/vscode-plugin/commit/199264b8e87f2c49255770e39eac42ba11ae3425))
* bump deps ([a0be596](https://github.com/codingrules-ai/vscode-plugin/commit/a0be59647a9c4936254b699991675c9e219ba9d8))
* bump deps ([3c3fb80](https://github.com/codingrules-ai/vscode-plugin/commit/3c3fb80312edf3144cc236f8a50b32f01f2d79fb))
* configure Renovate ([#1](https://github.com/codingrules-ai/vscode-plugin/issues/1)) ([15f8d9f](https://github.com/codingrules-ai/vscode-plugin/commit/15f8d9f9b8902f40032c830444f4478e3c8a5f93))
* **deps:** downgrade @types/vscode and vscode engine version to 1.90.0 ([86394ca](https://github.com/codingrules-ai/vscode-plugin/commit/86394ca9945c5df8f389b5ea79bfb10b3cdd0ace))
* **deps:** replace dependency npm-run-all with npm-run-all2 ^5.0.0 ([#2](https://github.com/codingrules-ai/vscode-plugin/issues/2)) ([9184303](https://github.com/codingrules-ai/vscode-plugin/commit/9184303549ba8ea893fc8c0159cfac29e95dd155))
* **deps:** update dependency @types/node to v22 ([#3](https://github.com/codingrules-ai/vscode-plugin/issues/3)) ([17c92fd](https://github.com/codingrules-ai/vscode-plugin/commit/17c92fd4a7d155a68c2ed2fc970aef8f2fbfd0f8))
* **deps:** update dependency npm-run-all2 to v7 ([#5](https://github.com/codingrules-ai/vscode-plugin/issues/5)) ([72940c1](https://github.com/codingrules-ai/vscode-plugin/commit/72940c1bf10ec3195332a6746af2205c28562fd3))
* **deps:** update eslint and related dependencies to version 9.23.0 ([a2cb774](https://github.com/codingrules-ai/vscode-plugin/commit/a2cb774a937abca05912cbfebdc82f2fc39e52f8))
* enhance renovate configuration with additional rules and settings ([c3ea798](https://github.com/codingrules-ai/vscode-plugin/commit/c3ea7989764e23755d26480db5864b2303fa8413))
* migrate to release-please for versioning and remove standard-version ([5295d49](https://github.com/codingrules-ai/vscode-plugin/commit/5295d49b75c99788cd2b2944ef05ae9d37b2c232))
* **release:** 0.2.0 ([47c4b93](https://github.com/codingrules-ai/vscode-plugin/commit/47c4b93dfcebf2f57660ab900740f5650bcae053))
* **release:** 0.3.0 ([64b7964](https://github.com/codingrules-ai/vscode-plugin/commit/64b7964c4a63d2ba31a5b2d60693b4fc3bc34224))
* **release:** 0.3.1 ([780fa6d](https://github.com/codingrules-ai/vscode-plugin/commit/780fa6dc70eace545027e020e8364dce288e11ce))
* **release:** 0.3.2 ([88ba05a](https://github.com/codingrules-ai/vscode-plugin/commit/88ba05ae7f961d88ccc24279f4cc894b00a3d6a6))
* **release:** 0.4.0 ([e121f84](https://github.com/codingrules-ai/vscode-plugin/commit/e121f84fafbdf794ae61375ca2384412755420a3))
* **release:** 0.4.1 ([ccec51b](https://github.com/codingrules-ai/vscode-plugin/commit/ccec51b300c7cc5c0287ad76800421207669abd2))
* **release:** 0.4.2 ([c35a1fc](https://github.com/codingrules-ai/vscode-plugin/commit/c35a1fc186c4da449bb65cc51be365c8ed58a049))
* **release:** 0.4.3 ([0c2cb84](https://github.com/codingrules-ai/vscode-plugin/commit/0c2cb84481ce1f27c7a5444e902f59fdf5e30ef2))
* **release:** 0.4.4 ([0eb9b85](https://github.com/codingrules-ai/vscode-plugin/commit/0eb9b85e60730b1309a4a1766df57da16fc852e6))
* **release:** 0.4.5 ([5a80503](https://github.com/codingrules-ai/vscode-plugin/commit/5a8050334e226b22b703b8b8b265296750797e1a))
* **release:** 0.4.6 ([d299d0a](https://github.com/codingrules-ai/vscode-plugin/commit/d299d0abd721e0c3c8fa35c0bfc1021b2a9083e1))
* **release:** 0.4.7 ([3cfe8b8](https://github.com/codingrules-ai/vscode-plugin/commit/3cfe8b8385456cb4fa6f11890cd8b23cf719cb9a))
* **release:** 0.5.0 ([8831f9f](https://github.com/codingrules-ai/vscode-plugin/commit/8831f9fd42576cf96dff61866a452ab492f3d2c2))
* **release:** 0.5.1 ([ea1a745](https://github.com/codingrules-ai/vscode-plugin/commit/ea1a745a42a826accdd8caaa78932e6555461486))
* **release:** 0.5.2 ([20475b1](https://github.com/codingrules-ai/vscode-plugin/commit/20475b17cde61d50c1d0f55005a1f629aab8752c))
* **release:** 0.5.3 ([893cdc1](https://github.com/codingrules-ai/vscode-plugin/commit/893cdc100a7fe3072052b70f760310c909e4382a))
* **release:** 1.0.0 ([de78c77](https://github.com/codingrules-ai/vscode-plugin/commit/de78c779653277e8f88c77b4dc8fb8be1f3e3fce))
* **release:** 1.0.1 ([73d3079](https://github.com/codingrules-ai/vscode-plugin/commit/73d30796f5f36e15bc0be9b4515a34bf988f4ffa))
* **release:** 1.0.2 ([d0dda50](https://github.com/codingrules-ai/vscode-plugin/commit/d0dda50d1033b40bc1101b391e06ab50c090687e))
* **release:** 1.0.3 ([cfaf27d](https://github.com/codingrules-ai/vscode-plugin/commit/cfaf27d28ca51ed2517228b1925483b76762e41b))
* **release:** 1.0.4 ([9d17bc1](https://github.com/codingrules-ai/vscode-plugin/commit/9d17bc1156b75bdb3d0b0c980e6c91250b242470))
* **release:** 1.0.5 ([6246cdc](https://github.com/codingrules-ai/vscode-plugin/commit/6246cdc7139c692cde1728f9dad007859012f1b5))
* **release:** 1.0.6 ([a21ea69](https://github.com/codingrules-ai/vscode-plugin/commit/a21ea69cb73a7c25312da3177661fdebeaadcae1))
* **release:** 1.0.7 ([788c5ae](https://github.com/codingrules-ai/vscode-plugin/commit/788c5aec24f943ce95fa7ab7465862441349c736))
* **release:** 1.0.8 ([7e04e81](https://github.com/codingrules-ai/vscode-plugin/commit/7e04e8147d990d35799a7e4bf290e6220851e782))
* **release:** 1.0.9 ([a61f018](https://github.com/codingrules-ai/vscode-plugin/commit/a61f018a1c870f92e52a9bb3becf50448dc9f4b8))
* remove ESLint cache file, add LICENSE.md, and update package.json with repository and license information ([823abd1](https://github.com/codingrules-ai/vscode-plugin/commit/823abd1a10c2e3b54f9c3449a4b2ce583a40c94c))
* remove obsolete package workflow configuration ([9add55a](https://github.com/codingrules-ai/vscode-plugin/commit/9add55ae0973076875d5a3b113d3206118dc0014))
* replace icon with new logo image and update README ([df459c6](https://github.com/codingrules-ai/vscode-plugin/commit/df459c65019dadb5384dd4f1f7470df5a991b5c2))
* update .vscodeignore to exclude additional development files ([8dc937b](https://github.com/codingrules-ai/vscode-plugin/commit/8dc937b466e82c9158c42ce26d8e139a0bb6b487))
* update @supabase/supabase-js and @supabase/auth-js to latest versions ([4165e82](https://github.com/codingrules-ai/vscode-plugin/commit/4165e822b1531ae68539ca3fef94fe851fbac754))
* update @types/node to version 22.13.14 ([0a64012](https://github.com/codingrules-ai/vscode-plugin/commit/0a640126ab7402ad23c9b6806d5750adecf0547a))
* update dependencies ([201209a](https://github.com/codingrules-ai/vscode-plugin/commit/201209a1ffabf43992a752e48b2fdfb80d5f5c2c))
* update dependencies to latest versions ([6dbbdb8](https://github.com/codingrules-ai/vscode-plugin/commit/6dbbdb8b835637bfad842905f8b4c28ef5359e3a))
* update dependencies to latest versions ([d540fe4](https://github.com/codingrules-ai/vscode-plugin/commit/d540fe4054dc877dddad4396a6443539391a4cce))
* update esbuild configuration ([a1caf06](https://github.com/codingrules-ai/vscode-plugin/commit/a1caf0691fa90857ec5084e43ce2d13fcb640c4d))
* update icon ([23ff54b](https://github.com/codingrules-ai/vscode-plugin/commit/23ff54b99a43f2b997209d11cc0ad55608e8640d))
* update icon path to new logo image ([c3f181e](https://github.com/codingrules-ai/vscode-plugin/commit/c3f181e04f7f008bd80e5bbbfdd90475a2eb4fde))
* update logo image to the latest version ([a2e9875](https://github.com/codingrules-ai/vscode-plugin/commit/a2e9875137105e71c3c1159d2c10caa271217722))
* update logo images to the latest versions ([2ca66dc](https://github.com/codingrules-ai/vscode-plugin/commit/2ca66dc3eddc7f8d949b16f996376a372fad7781))
* update package.json to add categories and keywords, and refine lint-staged configurations ([c807ee8](https://github.com/codingrules-ai/vscode-plugin/commit/c807ee88ed761a07d773ec0ec8847afea5223cee))
* update package.json to include publisher and pricing information ([0960a86](https://github.com/codingrules-ai/vscode-plugin/commit/0960a86f1323c6d5c1cc616da1becb168ee80b18))
* update README ([f48d2e7](https://github.com/codingrules-ai/vscode-plugin/commit/f48d2e7dc2e18def28e1b2edb8b07715ba3877d7))
* update README to use new logo image and add logo_large ([5a54c24](https://github.com/codingrules-ai/vscode-plugin/commit/5a54c2475c604ad3d52832c9c1d0b5acb43782a4))
* update repository URL ([8f496b7](https://github.com/codingrules-ai/vscode-plugin/commit/8f496b7176d93e8278eaa8464cb191e58e8ef0ee))
* update repository URL in package.json and changelog ([7b33a59](https://github.com/codingrules-ai/vscode-plugin/commit/7b33a592b50a9ce133e7a4fc8eda6fb1273ec9eb))


### Documentation

* update README ([f958358](https://github.com/codingrules-ai/vscode-plugin/commit/f9583585b3722a02d2e0bf109f43a089f179c1a8))


### Code Refactoring

* remove Supabase configuration command from extension ([4f8798a](https://github.com/codingrules-ai/vscode-plugin/commit/4f8798a74a6dd511d0e9a7515d6369011543c74c))
* rename download command to internal version, enhance validation for rule properties, and streamline format selection process ([4f9641f](https://github.com/codingrules-ai/vscode-plugin/commit/4f9641f3b7817245dabcb5df3be1306aff2c9eeb))
* simplify URI protocol detection by utilizing vscode.env.uriScheme ([04965a1](https://github.com/codingrules-ai/vscode-plugin/commit/04965a143e338d2491426ce48ad6f4c8c6f6263b))
* update Supabase configuration to use hardcoded values, removing user-configurable options ([a3da447](https://github.com/codingrules-ai/vscode-plugin/commit/a3da447e93b35d32eee160cbd06bd4315bf2ea21))

### [1.0.9](https://github.com/codingrules-ai/vscode-plugin/compare/v1.0.8...v1.0.9) (2025-04-08)

### [1.0.8](https://github.com/codingrules-ai/vscode-plugin/compare/v1.0.7...v1.0.8) (2025-04-06)

### [1.0.7](https://github.com/codingrules-ai/vscode-plugin/compare/v1.0.6...v1.0.7) (2025-03-28)

### [1.0.6](https://github.com/codingrules-ai/vscode-plugin/compare/v1.0.5...v1.0.6) (2025-03-28)

### [1.0.5](https://github.com/codingrules-ai/vscode-plugin/compare/v1.0.4...v1.0.5) (2025-03-25)

### [1.0.4](https://github.com/codingrules-ai/vscode-plugin/compare/v1.0.3...v1.0.4) (2025-03-25)

### [1.0.3](https://github.com/codingrules-ai/vscode-plugin/compare/v1.0.2...v1.0.3) (2025-03-25)

### [1.0.2](https://github.com/codingrules-ai/vscode-plugin/compare/v1.0.1...v1.0.2) (2025-03-25)

### [1.0.1](https://github.com/codingrules-ai/vscode-plugin/compare/v1.0.0...v1.0.1) (2025-03-24)

## [1.0.0](https://github.com/codingrules-ai/vscode-plugin/compare/v0.5.3...v1.0.0) (2025-03-22)

### Documentation

- update README ([f958358](https://github.com/codingrules-ai/vscode-plugin/commit/f9583585b3722a02d2e0bf109f43a089f179c1a8))

### [0.5.3](https://github.com/codingrules-ai/vscode-plugin/compare/v0.5.2...v0.5.3) (2025-03-22)

### Bug Fixes

- remove unnecessary GitHub Release step from CI workflow ([011d894](https://github.com/codingrules-ai/vscode-plugin/commit/011d8942647440b0625761ae9acd1b896149606b))

### [0.5.2](https://github.com/codingrules-ai/vscode-plugin/compare/v0.5.1...v0.5.2) (2025-03-22)

### Features

- update CI and release workflows to package and upload VSIX files correctly ([f5e99e7](https://github.com/codingrules-ai/vscode-plugin/commit/f5e99e74471c59d8dd4b631988dcb002a634b8cc))

### [0.5.1](https://github.com/codingrules-ai/vscode-plugin/compare/v0.5.0...v0.5.1) (2025-03-22)

### Features

- add basic tests ([9850012](https://github.com/codingrules-ai/vscode-plugin/commit/985001251dc037575d5a46237c2ac7f79676455a))
- add CI, packaging, and release workflows for extension ([1d80cf5](https://github.com/codingrules-ai/vscode-plugin/commit/1d80cf5dc5b8884440985afcbd4a8c8e976a0f5c))
- add Xvfb setup to CI, packaging, and release workflows ([4f69c26](https://github.com/codingrules-ai/vscode-plugin/commit/4f69c261a08d8db97f79e6145d9a8218cd749070))

## [0.5.0](https://github.com/codingrules-ai/vscode-plugin/compare/v0.4.7...v0.5.0) (2025-03-22)

### Features

- add eslint-plugin-unused-imports for managing unused imports and update related configurations ([66f95c9](https://github.com/codingrules-ai/vscode-plugin/commit/66f95c9a9d698b5595da46c117f5c6aa94c572b4))
- enhance README with authentication, private content, and favorites features ([bdb3ed7](https://github.com/codingrules-ai/vscode-plugin/commit/bdb3ed76650942cae8d1f9e93b583b7a6f8030f5))
- implement favorite rules functionality with loading and display in the rules explorer ([67cbd56](https://github.com/codingrules-ai/vscode-plugin/commit/67cbd56083d3c976c69466360c183373f1f2df50))

### [0.4.7](https://github.com/codingrules-ai/vscode-plugin/compare/v0.4.6...v0.4.7) (2025-03-22)

### Features

- add command to copy rule to clipboard with error handling ([0ba9ffe](https://github.com/codingrules-ai/vscode-plugin/commit/0ba9ffe4f85da85ca25118e6cd0b6dfcd481d72f))
- add environment variable support for Supabase configuration and update documentation ([160cebf](https://github.com/codingrules-ai/vscode-plugin/commit/160cebfdde58f0ebdb77e4a7c686e0693ebfc14a))
- add external link functionality for author profiles in rule viewer ([a413147](https://github.com/codingrules-ai/vscode-plugin/commit/a413147b061297e88956d2655cd9ebbca937893d))
- add user profile retrieval ([e279505](https://github.com/codingrules-ai/vscode-plugin/commit/e279505a35c423bb893e1937bcfae2ec2e83c30f))
- clean-up architecture ([36f0bf6](https://github.com/codingrules-ai/vscode-plugin/commit/36f0bf6d3eaca8bf515259a74d22f05f5ecec53e))
- consolidate authentication commands ([7262415](https://github.com/codingrules-ai/vscode-plugin/commit/72624154fb83050b4d25b20bceb5b83f67d0c125))
- enhance rule download options and UI in rule viewer ([803feec](https://github.com/codingrules-ai/vscode-plugin/commit/803feecf5f487c89265f191037b18e1738e566fb))
- enhance rule downloading process with improved file handling and UI updates ([1890878](https://github.com/codingrules-ai/vscode-plugin/commit/1890878a9d359304024533b039e543e1cb62a753))
- implement background token refresh and cache invalidation for private rules ([6811836](https://github.com/codingrules-ai/vscode-plugin/commit/681183639712695940337bbb40ecf2c0b0bde296))
- implement functionality to fetch and display private rules ([e0d24d0](https://github.com/codingrules-ai/vscode-plugin/commit/e0d24d0a527fca43317c399d9a6b0dd58b1dc46f))
- implement search functionality with QuickPick results and loading indicators ([0c06765](https://github.com/codingrules-ai/vscode-plugin/commit/0c0676535e5b78b70653cfc83b9ebe7af3a1abeb))
- improve file download handling and user prompts in rule downloader ([1137188](https://github.com/codingrules-ai/vscode-plugin/commit/1137188d90b6e9dc7c2a77b4c83a6aa5c65794c6))
- refactor extension architecture with command handlers for rules, explorer, and authentication ([474b1d5](https://github.com/codingrules-ai/vscode-plugin/commit/474b1d560a0a7b5ed6e40da3e848bcc90d08a4c4))

### Bug Fixes

- ensure clipboard functionality handles empty rule content and improve event listener setup ([839f128](https://github.com/codingrules-ai/vscode-plugin/commit/839f1281a5bb635ce6e193ca9a8322185cbf018f))

### Refactors

- update Supabase configuration to use hardcoded values, removing user-configurable options ([a3da447](https://github.com/codingrules-ai/vscode-plugin/commit/a3da447e93b35d32eee160cbd06bd4315bf2ea21))

### [0.4.6](https://github.com/codingrules-ai/vscode-plugin/compare/v0.4.5...v0.4.6) (2025-03-22)

### [0.4.5](https://github.com/codingrules-ai/vscode-plugin/compare/v0.4.4...v0.4.5) (2025-03-22)

### Features

- refine URI protocol detection logic for VS Code-based editors ([b97bf3c](https://github.com/codingrules-ai/vscode-plugin/commit/b97bf3c6210e6eb8408f81d0f427fd73eb7cb23f))

### Refactors

- simplify URI protocol detection by utilizing vscode.env.uriScheme ([04965a1](https://github.com/codingrules-ai/vscode-plugin/commit/04965a143e338d2491426ce48ad6f4c8c6f6263b))

### [0.4.4](https://github.com/codingrules-ai/vscode-plugin/compare/v0.4.3...v0.4.4) (2025-03-22)

### Features

- enable tree shaking in esbuild configuration ([10cba94](https://github.com/codingrules-ai/vscode-plugin/commit/10cba9430083507562da7f157707b24cf86ad12d))

### [0.4.3](https://github.com/codingrules-ai/vscode-plugin/compare/v0.4.2...v0.4.3) (2025-03-22)

### [0.4.2](https://github.com/codingrules-ai/vscode-plugin/compare/v0.4.1...v0.4.2) (2025-03-22)

### Features

- enhance Supabase service to include user authentication checks and private content handling ([b0ff271](https://github.com/codingrules-ai/vscode-plugin/commit/b0ff27133ac95e706b7938f724610e307f6bdd9d))
- improve URI protocol detection ([6915600](https://github.com/codingrules-ai/vscode-plugin/commit/6915600a13f6a2f06e9d788109d6cc92bf28bd93))
- refactor authentication service initialization and enhance session management ([053f2ca](https://github.com/codingrules-ai/vscode-plugin/commit/053f2ca095b962a7849e1e8ca130599b24b3b99f))
- sort tags and tools alphabetically in rule viewer and rules explorer ([4008fd1](https://github.com/codingrules-ai/vscode-plugin/commit/4008fd1291fae52e501aafe3dc772977713e49ed))

### [0.4.1](https://github.com/codingrules-ai/vscode-plugin/compare/v0.4.0...v0.4.1) (2025-03-21)

### Features

- enhance authentication service with session management and user state tracking ([05c8773](https://github.com/codingrules-ai/vscode-plugin/commit/05c877320757639a2a8703c4139b108d3ce2f526))
- implement dynamic URI protocol detection for various VS Code-based editors ([0eead95](https://github.com/codingrules-ai/vscode-plugin/commit/0eead955db0fc4a3f93c281d9a1fffe998d31173))
- improve authentication flow and service integration ([2604c57](https://github.com/codingrules-ai/vscode-plugin/commit/2604c577df7db8969a9f442c69c8f928453a39ee))

## [0.4.0](https://github.com/codingrules-ai/vscode-plugin/compare/v0.3.2...v0.4.0) (2025-03-21)

### Features

- add URI handler for authentication and enhance session management ([bb65e41](https://github.com/codingrules-ai/vscode-plugin/commit/bb65e41faaaa4713e10119362e3c62edb07cafe2))

### [0.3.2](https://github.com/codingrules-ai/vscode-plugin/compare/v0.3.1...v0.3.2) (2025-03-21)

### Features

- implement user authentication features with login, logout, and profile viewing capabilities ([880dcfd](https://github.com/codingrules-ai/vscode-plugin/commit/880dcfd4eac1ea1662a43a579c9ac85c0893e513))

### Refactors

- remove Supabase configuration command from extension ([4f8798a](https://github.com/codingrules-ai/vscode-plugin/commit/4f8798a74a6dd511d0e9a7515d6369011543c74c))

### [0.3.1](https://github.com/codingrules-ai/vscode-plugin/compare/v0.3.0...v0.3.1) (2025-03-21)

## [0.3.0](https://github.com/codingrules-ai/vscode-plugin/compare/v0.2.0...v0.3.0) (2025-03-21)

## [0.2.0](https://github.com/codingrules-ai/vscode-plugin/compare/v0.1.0...v0.2.0) (2025-03-21)

### Features

- enhance rule search functionality and add top upvoted rules feature ([9903ed6](https://github.com/codingrules-ai/vscode-plugin/commit/9903ed69528358b7a51280cdf0d1593b29f3c5ca))
- improve search functionality by adding tag-based filtering and enhance error reporting in UI ([1da88a1](https://github.com/codingrules-ai/vscode-plugin/commit/1da88a128f1c29adecf6cb2dec1a32f1d3ca950c))

## [0.1.0](https://github.com/codingrules-ai/vscode-plugin/releases/tag/v0.1.0) (2025-03-21)

### Features

- add CodingRules.ai VS Code extension with rule browsing, searching, and downloading capabilities ([7756243](https://github.com/codingrules-ai/vscode-plugin/commit/7756243))
- initial commit ([799fed7](https://github.com/codingrules-ai/vscode-plugin/commit/799fed7))

### Bug Fixes

- update Cline file format from .cline to .clinerules and enhance download options with generic formats ([3fe5232](https://github.com/codingrules-ai/vscode-plugin/commit/3fe5232))

### Code Refactoring

- rename download command to internal version, enhance validation for rule properties, and streamline format selection process ([4f9641f](https://github.com/codingrules-ai/vscode-plugin/commit/4f9641f))

### Chores

- add ESLint cache file to improve linting performance ([2a3e903](https://github.com/codingrules-ai/vscode-plugin/commit/2a3e903))
- remove ESLint cache file, add LICENSE.md, and update package.json with repository and license information ([823abd1](https://github.com/codingrules-ai/vscode-plugin/commit/823abd1))
- update package.json to include publisher and pricing information ([0960a86](https://github.com/codingrules-ai/vscode-plugin/commit/0960a86))
- update icon ([23ff54b](https://github.com/codingrules-ai/vscode-plugin/commit/23ff54b))
