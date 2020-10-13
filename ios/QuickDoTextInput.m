//
//  QuickDoTextInput.m
//
//  Created by Rocky on 10/12/20.
//

#import <React/RCTMultilineTextInputView.h>
#import <React/RCTViewManager.h>

@interface QuickDoTextInputManager : RCTViewManager
@end

@implementation QuickDoTextInputManager

// Export this module
RCT_EXPORT_MODULE(QuickDoTextInput)

// Return the UIView
- (UIView *)view
{
  return [[RCTMultilineTextInputView alloc] initWithBridge:self.bridge];
}

- (BOOL)textFieldShouldReturn:(__unused UITextField *)textField
{
  return YES;
}

@end
