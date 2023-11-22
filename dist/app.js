/*! Copyright (c) 2020-23 Prolincur Technologies LLP.
All Rights Reserved.

Please check the provided LICENSE file for licensing details.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT
OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.
 */
import u from "react";
const n = (e) => {
  const t = u.useRef(e);
  return u.useLayoutEffect(() => {
    t.current = e;
  }, [e]), t;
}, o = (e) => {
  const t = n(e);
  return u.useCallback((...r) => {
    var c;
    return (c = t.current) == null ? void 0 : c.call(t, ...r);
  }, [
    t
  ]);
};
export {
  o as useMutableFunc,
  n as useMutableRef
};
