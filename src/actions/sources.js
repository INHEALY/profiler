/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// @flow
import type { Action, SourceCodeLoadingError } from 'firefox-profiler/types';

export function beginLoadingSourceCodeFromUrl(
  file: string,
  url: string
): Action {
  return { type: 'SOURCE_CODE_LOADING_BEGIN_URL', file, url };
}

export function beginLoadingSourceCodeFromBrowserConnection(
  file: string
): Action {
  return { type: 'SOURCE_CODE_LOADING_BEGIN_BROWSER_CONNECTION', file };
}

export function finishLoadingSourceCode(file: string, source: string): Action {
  return { type: 'SOURCE_CODE_LOADING_SUCCESS', file, source };
}

export function failLoadingSourceCode(
  file: string,
  errors: SourceCodeLoadingError[]
): Action {
  return { type: 'SOURCE_CODE_LOADING_ERROR', file, errors };
}
